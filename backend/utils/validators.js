const validator = require('validator');
const User = require('../models/User.model');

const validateRegisterInput = async (data) => {
  const errors = {};

  if (!data.firstName || !data.firstName.trim()) {
    errors.firstName = 'First name is required';
  }

  if (!data.surname || !data.surname.trim()) {
    errors.surname = 'Surname is required';
  }

  if (!data.email || !validator.isEmail(data.email)) {
    errors.email = 'Valid email is required';
  } else {
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      errors.email = 'Email already in use';
    }
  } 

  if (!data.country) {
    errors.country = 'Country is required ';
  }

  if (!data.password || data.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

module.exports = { validateRegisterInput };