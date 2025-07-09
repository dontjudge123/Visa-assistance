const User = require('../models/User.model');
const { generateTokens } = require('../config/jwt');
const { sendEmail } = require('../services/email.service');
const { generateOTP, getOTPExpiry } = require('../services/otp.service');
const { validateRegisterInput } = require('../utils/validators');

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public


// Add this to your existing auth controller
const registerAdmin = async (req, res, next) => {
  try {
    const { firstName, surname, email, password, confirmPassword, secretKey } = req.body;

    // Verify admin secret key
    if (secretKey !== process.env.ADMIN_SECRET_KEY) {
      return res.status(403).json({
        success: false,
        message: 'Invalid admin secret key'
      });
    }

    // Validate input (you should create validateAdminRegisterInput)
    const { errors, isValid } = await validateRegisterInput({
      firstName,
      surname,
      email,
      password,
      confirmPassword
    });

    if (!isValid) {
      return res.status(400).json({ errors });
    }

    // Create admin user
    const user = new User({
      firstName,
      surname,
      email,
      password,
      role: 'admin',
      isVerified: true // Auto-verify admin users
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: 'Admin created successfully'
    });

  } catch (error) {
    next(error);
  }
};







const register = async (req, res, next) => {
  try {
    const { firstName, surname, otherName, email, country, password, confirmPassword } = req.body;

    // Validate input
    const { errors, isValid } = await validateRegisterInput({
      firstName,
      surname,
      email,
      country,
      password,
      confirmPassword
    });

    if (!isValid) {
      return res.status(400).json({ errors });
    }

    // Generate OTP
    const otp = generateOTP();
    const otpExpiry = getOTPExpiry();

    // Create user
    const user = new User({
      firstName,
      surname,
      otherName,
      email,
      country,
      password,
      otp,
      otpExpiry
    });

    await user.save();

    // Send verification email
    await sendEmail({
      to: email,
      subject: 'Verify Your Email - Anmeldung-Helper',
      html: `
        <h2>Email Verification</h2>
        <p>Thank you for registering with Anmeldung-Helper!</p>
        <p>Your verification code is: <strong>${otp}</strong></p>
        <p>This code will expire in 10 minutes.</p>
      `
    });

    res.status(201).json({
      success: true,
      message: 'Registration successful. Please check your email for verification.'
    });

  } catch (error) {
    next(error);
  }
};

// @desc    Verify user email with OTP
// @route   POST /api/auth/verify-email
// @access  Public
const verifyEmail = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ 
      email,
      otp,
      otpExpiry: { $gt: new Date() }
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired OTP'
      });
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Email verified successfully'
    });

  } catch (error) {
    next(error);
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
// const login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid credentials'
//       });
//     }

//     // Check if password matches
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid credentials'
//       });
//     }

//     // Check if email is verified
//     if (!user.isVerified) {
//       return res.status(403).json({
//         success: false,
//         message: 'Please verify your email first'
//       });
//     }

//     // Generate tokens
//     const { accessToken, refreshToken } = generateTokens({ id: user._id });

//     // Save refresh token to database
//     user.refreshToken = refreshToken;
//     await user.save();

//     res.status(200).json({
//       success: true,
//       accessToken,
//       refreshToken,
//       user: {
//         id: user._id,
//         firstName: user.firstName,
//         surname: user.surname,
//         email: user.email,
//         role: user.role 
//       }
//     });

//   } catch (error) {
//     next(error);
//   }
// };

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check if email is verified
    if (!user.isVerified) {
      return res.status(403).json({
        success: false,
        message: 'Please verify your email first'
      });
    }

    // Generate tokens with role
    const { accessToken, refreshToken } = generateTokens({
      id: user._id,
      role: user.role,
      email: user.email
    });

    // Save refresh token to database
    user.refreshToken = refreshToken;
    await user.save();

    res.status(200).json({
      success: true,
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        firstName: user.firstName,
        surname: user.surname,
        email: user.email,
        role: user.role // Include role in response
      }
    });

  } catch (error) {
    next(error);
  }
};

// @desc    Forgot password - send OTP
// @route   POST /api/auth/forgot-password
// @access  Public
const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Generate OTP
    const otp = generateOTP();
    const otpExpiry = getOTPExpiry();

    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    // Send password reset email
    await sendEmail({
      to: email,
      subject: 'Password Reset - Anmeldung-Helper',
      html: `
        <h2>Password Reset</h2>
        <p>You requested to reset your password. Here's your OTP:</p>
        <p><strong>${otp}</strong></p>
        <p>This code will expire in 10 minutes.</p>
      `
    });

    res.status(200).json({
      success: true,
      message: 'OTP sent to your email'
    });

  } catch (error) {
    next(error);
  }
};

// @desc    Reset password with OTP
// @route   POST /api/auth/reset-password
// @access  Public
const resetPassword = async (req, res, next) => {
  try {
    const { email, otp, newPassword, confirmPassword } = req.body;

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'Passwords do not match'
      });
    }

    // Find user with valid OTP
    const user = await User.findOne({ 
      email,
      otp,
      otpExpiry: { $gt: new Date() }
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired OTP'
      });
    }

    // Update password
    user.password = newPassword;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Password reset successfully'
    });

  } catch (error) {
    next(error);
  }
};

// @desc    Refresh access token
// @route   POST /api/auth/refresh-token
// @access  Public
const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: 'Refresh token required'
      });
    }

    // Verify refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || user.refreshToken !== refreshToken) {
      return res.status(403).json({
        success: false,
        message: 'Invalid refresh token'
      });
    }

    // Generate new access token
    const { accessToken } = generateTokens({ id: user._id });

    res.status(200).json({
      success: true,
      accessToken
    });

  } catch (error) {
    next(error);
  }
};

 
module.exports = {
  register,
  registerAdmin,
  login,
  verifyEmail,
  forgotPassword,
  resetPassword,
  refreshToken
};