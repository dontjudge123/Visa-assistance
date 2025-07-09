const express = require('express');
const router = express.Router();
const { authenticate, authorize, adminOnly } = require('../middleware/auth.middleware');
const {
  register,
  login,
  verifyEmail,
  forgotPassword,
  resetPassword,
  refreshToken,
  registerAdmin
} = require('../controllers/auth.controller');
const { 
  getMe, 
  updateMe,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser 
} = require('../controllers/user.controller');

// Public routes
router.post('/register-admin', registerAdmin);
router.post('/register', register);
router.post('/login', login);
router.post('/verify-email', verifyEmail);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/refresh-token', refreshToken);
  
// Protected user routes 
router.get('/me', authenticate, getMe);
router.put('/me', authenticate, updateMe);

// Admin-only routes
router.get('/users', authenticate, adminOnly, getAllUsers);
router.get('/users/:id', authenticate, adminOnly, getUserById);
router.put('/users/:id', authenticate, adminOnly, updateUser);
router.delete('/users/:id', authenticate, adminOnly, deleteUser);

// Example route for multiple roles
router.get('/moderation', authenticate, authorize(['admin', 'moderator']), (req, res) => {
  res.json({ message: 'Moderator content' });
});

module.exports = router;