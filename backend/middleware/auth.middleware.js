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
        code: 'MISSING_TOKEN',
        message: 'Access token required' 
      });
    }

    // Add verbose token verification
    console.log('Verifying token:', token);
    const decoded = verifyAccessToken(token);
    console.log('Decoded token:', decoded);

    // Enhanced user lookup
    const user = await User.findById(decoded.id).lean();
    
    if (!user) {
      console.error(`User not found for ID: ${decoded.id}`);
      console.log('Sample user from DB:', await User.findOne().lean());
      return res.status(401).json({ 
        success: false,
        code: 'USER_NOT_FOUND',
        message: 'User not found',
        decodedUserId: decoded.id // Include the ID we looked for
      });
    }

    // Verify account status
    if (user.active === false) {
      return res.status(403).json({
        success: false,
        code: 'ACCOUNT_DISABLED',
        message: 'Account is disabled'
      });
    }

    req.user = {
      ...decoded,
      details: user
    };
    
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(403).json({ 
      success: false,
      code: 'AUTH_ERROR',
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