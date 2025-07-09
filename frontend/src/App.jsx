import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import ForgotPassword from "./components/Auth/ForgotPassword";
import OTPVerification from "./components/Auth/OTPVerification";
import ResetPassword from "./components/Auth/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { AuthProvider } from "./context/GlobalContext";

import VisaProcess from "./pages/Features/VisaProcess";
import GettingMarried from "./pages/Features/GettingMarried";
import BringingPet from "./pages/Features/BringingPet";
import RegisteringBusiness from "./pages/Features/RegisteringBusiness";



import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminSettings from './pages/admin/AdminSettings';
import AdminRoute from './components/common/AdminRoute';

function App() {
  return (
    // Wrap the Router outside AuthProvider
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="verify-email" element={<OTPVerification />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />

            <Route path="visa-process" element={<VisaProcess />} />
            <Route path="getting-married" element={<GettingMarried />} />
            <Route path="bringing-pet" element={<BringingPet />} />
            <Route
              path="registering-business"
              element={<RegisteringBusiness />}
            />
          </Route>


            {/* Admin routes */}
           <Route path="/admin" element={<AdminRoute />}>
            <Route element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
          </Route>
       
        </Routes>
        <ToastContainer position="top-right" autoClose={5000} />
      </AuthProvider>
    </Router>
  );
}

export default App;
