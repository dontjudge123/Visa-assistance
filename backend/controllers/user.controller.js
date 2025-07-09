const User = require('../models/User.model');

// @desc    Get current user profile
// @route   GET /api/users/me
// @access  Private
const getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password -refreshToken -otp -otpExpiry');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      user
    });

  } catch (error) {
    next(error);
  }
};

// @desc    Update user profile
// @route   PUT /api/users/me
// @access  Private
const updateMe = async (req, res, next) => {
  try {
    const { firstName, surname, otherName, country } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { firstName, surname, otherName, country },
      { new: true, runValidators: true }
    ).select('-password -refreshToken -otp -otpExpiry');

    res.status(200).json({
      success: true,
      user
    });

  } catch (error) {
    next(error);
  }
};



// Admin: Get all users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select('-password -refreshToken');
    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    next(error);
  }
};

// Admin: Get user by ID
const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-password -refreshToken');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

// Admin: Update user
const updateUser = async (req, res, next) => {
  try {
    const { role, isVerified } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role, isVerified },
      { new: true, runValidators: true }
    ).select('-password -refreshToken');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

// Admin: Delete user
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMe,
  updateMe,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};