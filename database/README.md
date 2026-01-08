# Emergency Response Database Schema

## Overview
PostgreSQL database schema for the Emergency Response Application.

## Database Setup

### 1. Install PostgreSQL
Download and install PostgreSQL from https://www.postgresql.org/download/

### 2. Create Database
```sql
CREATE DATABASE ersos_db;
```

### 3. Run Migrations
```bash
cd backend
npm run db:migrate
```

### 4. Seed Initial Data (Optional)
```bash
npm run db:seed
```

## Tables

### users
User account information
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  role VARCHAR(20) DEFAULT 'user', -- 'user', 'responder', 'admin'
  profile_picture VARCHAR(500),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
```

### emergency_contacts
User's emergency contacts
```sql
CREATE TABLE emergency_contacts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  relationship VARCHAR(100),
  priority INTEGER DEFAULT 1, -- 1 = highest priority
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_emergency_contacts_user_id ON emergency_contacts(user_id);
```

### alerts
Emergency alerts/incidents
```sql
CREATE TABLE alerts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  type VARCHAR(50) NOT NULL, -- 'medical', 'accident', 'fire', 'crime', 'natural_disaster', 'other'
  status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'acknowledged', 'in_progress', 'resolved', 'cancelled'
  priority VARCHAR(20) DEFAULT 'high', -- 'low', 'medium', 'high', 'critical'
  description TEXT,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  address TEXT,
  responder_id INTEGER REFERENCES users(id),
  acknowledged_at TIMESTAMP,
  resolved_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_alerts_user_id ON alerts(user_id);
CREATE INDEX idx_alerts_status ON alerts(status);
CREATE INDEX idx_alerts_type ON alerts(type);
CREATE INDEX idx_alerts_created_at ON alerts(created_at);
CREATE INDEX idx_alerts_location ON alerts(latitude, longitude);
```

### locations
Real-time location tracking
```sql
CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  alert_id INTEGER REFERENCES alerts(id) ON DELETE CASCADE,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  accuracy DECIMAL(10, 2),
  altitude DECIMAL(10, 2),
  speed DECIMAL(10, 2),
  heading DECIMAL(5, 2),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_locations_user_id ON locations(user_id);
CREATE INDEX idx_locations_alert_id ON locations(alert_id);
CREATE INDEX idx_locations_timestamp ON locations(timestamp);
```

### notifications
Notification logs
```sql
CREATE TABLE notifications (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  alert_id INTEGER REFERENCES alerts(id) ON DELETE CASCADE,
  type VARCHAR(20) NOT NULL, -- 'push', 'sms', 'email'
  recipient VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'sent', 'failed'
  sent_at TIMESTAMP,
  error_message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_alert_id ON notifications(alert_id);
CREATE INDEX idx_notifications_status ON notifications(status);
```

### responders
Responder-specific information
```sql
CREATE TABLE responders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  badge_number VARCHAR(50) UNIQUE,
  organization VARCHAR(255),
  department VARCHAR(255),
  specialization VARCHAR(255),
  is_available BOOLEAN DEFAULT true,
  current_latitude DECIMAL(10, 8),
  current_longitude DECIMAL(11, 8),
  last_location_update TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_responders_user_id ON responders(user_id);
CREATE INDEX idx_responders_is_available ON responders(is_available);
```

### audit_logs
System audit trail
```sql
CREATE TABLE audit_logs (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  action VARCHAR(100) NOT NULL,
  entity_type VARCHAR(50) NOT NULL,
  entity_id INTEGER,
  old_values JSONB,
  new_values JSONB,
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_action ON audit_logs(action);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at);
```

## Relationships

```
users (1) ----< (many) emergency_contacts
users (1) ----< (many) alerts
users (1) ----< (many) locations
users (1) ----< (many) notifications
users (1) ---- (1) responders

alerts (1) ----< (many) locations
alerts (1) ----< (many) notifications
```

## Sample Data

### Admin User
```sql
INSERT INTO users (name, email, password_hash, phone, role) 
VALUES ('Admin User', 'admin@er-sos.com', '$2a$10$hashedpassword', '+1234567890', 'admin');
```

### Test Responder
```sql
INSERT INTO users (name, email, password_hash, phone, role) 
VALUES ('John Responder', 'responder@er-sos.com', '$2a$10$hashedpassword', '+1234567891', 'responder');

INSERT INTO responders (user_id, badge_number, organization, department, is_available)
VALUES (2, 'RESP-001', 'Emergency Services', 'Medical', true);
```

### Test User
```sql
INSERT INTO users (name, email, password_hash, phone, role) 
VALUES ('Jane Doe', 'user@example.com', '$2a$10$hashedpassword', '+1234567892', 'user');

INSERT INTO emergency_contacts (user_id, name, phone, relationship, priority)
VALUES (3, 'John Doe', '+1234567893', 'Spouse', 1);
```

## Backup and Restore

### Backup
```bash
pg_dump -U postgres -d ersos_db > backup.sql
```

### Restore
```bash
psql -U postgres -d ersos_db < backup.sql
```

## Performance Optimization

### Indexes
All foreign keys and frequently queried columns have indexes.

### Partitioning (Optional)
For large-scale deployments, consider partitioning the `locations` and `audit_logs` tables by date.

### Archiving
Implement archiving strategy for old resolved alerts and audit logs.

---
*Last Updated: January 5, 2026*
