// src/pages/admin/AdminDashboard.jsx
import { useAuth } from '../../context/GlobalContext';

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user?.firstName}!</p>
      {/* Add admin dashboard content */}
    </div>
  );
};

export default AdminDashboard;