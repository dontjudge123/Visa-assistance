import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/GlobalContext';

const OTPVerification = () => {
  const { verifyUserEmail } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [email] = useState(location.state?.email || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await verifyUserEmail(email, otp);
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Verify Your Email</h2>
      <p className="text-center mb-6">
        We've sent a 6-digit verification code to {email}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Verification Code
          </label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter 6-digit code"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Verify Email
        </button>
      </form>

      <div className="mt-4 text-center text-sm text-gray-600">
        Didn't receive the code?{' '}
        <button className="text-indigo-600 hover:text-indigo-800">
          Resend Code
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;