-- Sample Data for Emergency Response Database
-- WARNING: Passwords are hashed with bcrypt (password: "password123")

-- Insert sample users
INSERT INTO users (name, email, password_hash, phone, role) VALUES
('Admin User', 'admin@er-sos.com', '$2a$10$8K1p/a0dL3.I9/A1P4..6uCHv5Y3wX8rYqWz9zT7O6vGLJN8dPHqO', '+1234567890', 'admin'),
('John Responder', 'responder@er-sos.com', '$2a$10$8K1p/a0dL3.I9/A1P4..6uCHv5Y3wX8rYqWz9zT7O6vGLJN8dPHqO', '+1234567891', 'responder'),
('Sarah Medic', 'sarah.medic@er-sos.com', '$2a$10$8K1p/a0dL3.I9/A1P4..6uCHv5Y3wX8rYqWz9zT7O6vGLJN8dPHqO', '+1234567892', 'responder'),
('Jane Doe', 'jane@example.com', '$2a$10$8K1p/a0dL3.I9/A1P4..6uCHv5Y3wX8rYqWz9zT7O6vGLJN8dPHqO', '+1234567893', 'user'),
('Bob Smith', 'bob@example.com', '$2a$10$8K1p/a0dL3.I9/A1P4..6uCHv5Y3wX8rYqWz9zT7O6vGLJN8dPHqO', '+1234567894', 'user');

-- Insert responders
INSERT INTO responders (user_id, badge_number, organization, department, specialization, is_available) VALUES
(2, 'RESP-001', 'Emergency Services', 'Fire Department', 'Fire & Rescue', true),
(3, 'RESP-002', 'Emergency Services', 'Medical', 'Paramedic', true);

-- Insert emergency contacts
INSERT INTO emergency_contacts (user_id, name, phone, relationship, priority) VALUES
(4, 'John Doe', '+1234567895', 'Spouse', 1),
(4, 'Mary Doe', '+1234567896', 'Mother', 2),
(5, 'Alice Smith', '+1234567897', 'Wife', 1);

-- Insert sample alerts (resolved and active)
INSERT INTO alerts (user_id, type, status, priority, description, latitude, longitude, address, responder_id, acknowledged_at, resolved_at, created_at) VALUES
(4, 'medical', 'resolved', 'critical', 'Heart attack emergency', 40.7128, -74.0060, '123 Main St, New York, NY', 3, CURRENT_TIMESTAMP - INTERVAL '2 hours', CURRENT_TIMESTAMP - INTERVAL '1 hour', CURRENT_TIMESTAMP - INTERVAL '3 hours'),
(5, 'accident', 'resolved', 'high', 'Car accident on highway', 40.7580, -73.9855, 'Times Square, New York, NY', 2, CURRENT_TIMESTAMP - INTERVAL '5 hours', CURRENT_TIMESTAMP - INTERVAL '4 hours', CURRENT_TIMESTAMP - INTERVAL '6 hours'),
(4, 'fire', 'in_progress', 'critical', 'Building fire reported', 40.7489, -73.9680, '42 E 20th St, New York, NY', 2, CURRENT_TIMESTAMP - INTERVAL '30 minutes', NULL, CURRENT_TIMESTAMP - INTERVAL '45 minutes'),
(5, 'crime', 'acknowledged', 'high', 'Robbery in progress', 40.7614, -73.9776, '350 5th Ave, New York, NY', 2, CURRENT_TIMESTAMP - INTERVAL '10 minutes', NULL, CURRENT_TIMESTAMP - INTERVAL '15 minutes');

-- Insert sample locations
INSERT INTO locations (user_id, alert_id, latitude, longitude, accuracy, timestamp) VALUES
(4, 1, 40.7128, -74.0060, 10.5, CURRENT_TIMESTAMP - INTERVAL '3 hours'),
(4, 1, 40.7129, -74.0061, 8.2, CURRENT_TIMESTAMP - INTERVAL '2 hours 50 minutes'),
(5, 2, 40.7580, -73.9855, 15.0, CURRENT_TIMESTAMP - INTERVAL '6 hours'),
(4, 3, 40.7489, -73.9680, 12.0, CURRENT_TIMESTAMP - INTERVAL '45 minutes'),
(4, 3, 40.7490, -73.9681, 9.5, CURRENT_TIMESTAMP - INTERVAL '30 minutes');

-- Insert sample notifications
INSERT INTO notifications (user_id, alert_id, type, recipient, subject, message, status, sent_at) VALUES
(4, 1, 'sms', '+1234567895', NULL, 'EMERGENCY: Jane Doe has sent an SOS alert. Location: 123 Main St, New York, NY', 'sent', CURRENT_TIMESTAMP - INTERVAL '3 hours'),
(4, 1, 'email', 'john@example.com', 'Emergency Alert - Jane Doe', 'Jane Doe has activated an emergency alert. Type: Medical Emergency. Please check immediately.', 'sent', CURRENT_TIMESTAMP - INTERVAL '3 hours'),
(2, 1, 'push', 'device-token-123', NULL, 'New emergency alert assigned to you', 'sent', CURRENT_TIMESTAMP - INTERVAL '2 hours'),
(5, 2, 'sms', '+1234567897', NULL, 'EMERGENCY: Bob Smith has sent an SOS alert. Location: Times Square, New York, NY', 'sent', CURRENT_TIMESTAMP - INTERVAL '6 hours');

-- Insert sample audit logs
INSERT INTO audit_logs (user_id, action, entity_type, entity_id, new_values, ip_address) VALUES
(1, 'LOGIN', 'user', 1, '{"timestamp": "2026-01-05T10:00:00Z"}', '192.168.1.100'),
(2, 'ALERT_ACKNOWLEDGED', 'alert', 1, '{"status": "acknowledged"}', '192.168.1.101'),
(2, 'ALERT_RESOLVED', 'alert', 1, '{"status": "resolved"}', '192.168.1.101'),
(4, 'ALERT_CREATED', 'alert', 3, '{"type": "fire", "priority": "critical"}', '192.168.1.102');
