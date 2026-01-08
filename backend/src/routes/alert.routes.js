const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const alertController = require('../controllers/alert.controller');

// All routes require authentication
router.use(authMiddleware);

router.post('/', alertController.createAlert);
router.get('/', alertController.getAlerts);
router.get('/:id', alertController.getAlertById);
router.put('/:id/status', alertController.updateAlertStatus);
router.delete('/:id', alertController.cancelAlert);

module.exports = router;
