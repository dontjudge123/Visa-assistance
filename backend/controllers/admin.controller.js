// controllers/admin.controller.js
const User = require('../models/User.model');

exports.getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const verifiedUsers = await User.countDocuments({ isVerified: true });
    const admins = await User.countDocuments({ role: 'admin' });
    
    res.json({
      success: true,
      stats: {
        totalUsers,
        verifiedUsers,
        pendingVerifications: totalUsers - verifiedUsers,
        admins
      }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch dashboard stats',
      error: error.message
    });
  }
};

exports.getRecentActivities = async (req, res) => {
  try {
    const activities = await User.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('firstName surname email createdAt updatedAt');
    
    res.json({ success: true, activities });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch recent activities',
      error: error.message
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password -refreshToken');
    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch users',
      error: error.message
    });
  }
};

exports.updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true, runValidators: true }
    ).select('-password -refreshToken');
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }
    
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to update user role',
      error: error.message
    });
  }
};

exports.getSystemSettings = async (req, res) => {
  try {
    // In production, get these from a Settings model
    const settings = {
      registrationOpen: true,
      maintenanceMode: false,
      emailVerificationRequired: true
    };
    
    res.json({ success: true, settings });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to get system settings',
      error: error.message
    });
  }
};

exports.updateSystemSettings = async (req, res) => {
  try {
    const { registrationOpen, maintenanceMode, emailVerificationRequired } = req.body;
    
    // In production, save these to a Settings model
    const updatedSettings = {
      registrationOpen,
      maintenanceMode,
      emailVerificationRequired
    };
    
    res.json({ success: true, settings: updatedSettings });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to update system settings',
      error: error.message
    });
  }
};