// src/components/admin/AdminSidebar.jsx
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <nav className="admin-sidebar">
      <ul>
        <li>
          <NavLink to="/admin" end>Dashboard</NavLink>
        </li>
        <li>
          {/* <NavLink to="/admin/users">Users</NavLink> */}
        </li>
        <li>
          <NavLink to="/admin/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminSidebar;