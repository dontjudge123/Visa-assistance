// routes/admin.routes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const { authenticate, authorize } = require('../middleware/auth.middleware');

// Admin Dashboard Routes
router.get('/dashboard', authenticate, authorize('admin'), adminController.getDashboardStats);
router.get('/activities', authenticate, authorize('admin'), adminController.getRecentActivities);

// User Management Routes
router.get('/users', authenticate, authorize('admin'), adminController.getAllUsers);
router.patch('/users/:id/role', authenticate, authorize('admin'), adminController.updateUserRole);

// System Settings Routes
router.get('/settings', authenticate, authorize('admin'), adminController.getSystemSettings);
router.patch('/settings', authenticate, authorize('admin'), adminController.updateSystemSettings);

module.exports = router;