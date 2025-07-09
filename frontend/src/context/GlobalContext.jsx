import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  registerUser, 
  loginUser, 
  verifyEmail, 
  forgotPassword, 
  resetPassword,
  refreshAccessToken,
  getCurrentUser
} from '../api/auth';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  const initializeAuth = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setLoading(false);
      return;
    }
 
    try {
      // First try with access token
      const userData = await getCurrentUser(token);
      setUser(userData.user);
    } catch (err) {
      // If access token fails, try refresh token
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        logout();
        return;
      }

      try {
        const { accessToken, user } = await refreshAccessToken(refreshToken);
        localStorage.setItem('accessToken', accessToken);
        setUser(user);
      } catch (refreshError) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  initializeAuth();
}, []);

  const register = async (formData) => {
    try {
      await registerUser(formData);
      toast.success('Registration successful! Please check your email for verification.');
      navigate('/verify-email', { state: { email: formData.email } });
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      toast.error(err.response?.data?.message || 'Registration failed');
    }
  };

const login = async (formData) => {
  try {
    const { accessToken, refreshToken, user } = await loginUser(formData);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    setUser(user);
    toast.success('Login successful!');
    
    // Redirect based on role
    if (user.role === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/dashboard');
    }
  } catch (err) {
    setError(err.response?.data?.message || 'Login failed');
    toast.error(err.response?.data?.message || 'Login failed');
  }
};

  const verifyUserEmail = async (email, otp) => {
    try {
      await verifyEmail(email, otp);
      toast.success('Email verified successfully!');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Verification failed');
      toast.error(err.response?.data?.message || 'Verification failed');
    }
  };

  const sendPasswordReset = async (email) => {
    try {
      await forgotPassword(email);
      toast.success('Password reset OTP sent to your email!');
      navigate('/reset-password', { state: { email } });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send reset email');
      toast.error(err.response?.data?.message || 'Failed to send reset email');
    }
  };

  const updatePassword = async (resetData) => {
    try {
      await resetPassword(resetData);
      toast.success('Password updated successfully!');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Password reset failed');
      toast.error(err.response?.data?.message || 'Password reset failed');
    }
  };

  const isAdmin = () => {
    return user?.role === 'admin';
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
         isAdmin, 
        register,
        login,
        verifyUserEmail,
        sendPasswordReset,
        updatePassword,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);