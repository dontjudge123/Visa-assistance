const { generateOTP, getOTPExpiry } = require('../services/otp.service');

const generateRandomString = (length = 32) => {
  return require('crypto').randomBytes(length).toString('hex');
};

module.exports = {
  generateOTP,
  getOTPExpiry,
  generateRandomString,
};