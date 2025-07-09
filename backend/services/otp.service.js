const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };
  
  const getOTPExpiry = () => {
    const expiry = new Date();
    expiry.setMinutes(expiry.getMinutes() + 10); // 10 minutes expiry
    return expiry;
  };
  
  module.exports = { generateOTP, getOTPExpiry };