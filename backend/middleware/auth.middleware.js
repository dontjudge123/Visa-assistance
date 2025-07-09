const { verifyAccessToken } = require('../config/jwt');
const User = require('../models/User.model');

// Authentication middleware
const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ 
        success: false,
        message: 'Access token required' 
      });
    }

    const decoded = verifyAccessToken(token);
    
    // Optional: Verify user still exists in database
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ 
        success: false,
        message: 'User not found' 
      });
    }

    req.user = {
      ...decoded,
      details: user // Attach full user details if needed
    };
    
    next();
  } catch (error) {
    return res.status(403).json({ 
      success: false,
      message: 'Invalid or expired token',
      error: error.message 
    });
  }
};

// Role authorization middleware (flexible for single or multiple roles)
const authorize = (roles = []) => {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ 
        success: false,
        message: 'Not authenticated' 
      });
    }

    if (roles.length && !roles.includes(req.user.role)) {
      return res.status(403).json({ 
        success: false,
        message: `Role ${req.user.role} is not authorized`,
        requiredRoles: roles
      });
    }

    next();
  };
};

// Specific role middlewares for convenience
const adminOnly = authorize('admin');
const userOnly = authorize('user');

module.exports = { 
  authenticate, 
  authorize,
  adminOnly,
  userOnly 
};