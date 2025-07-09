// src/pages/admin/AdminUsers.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('/api/admin/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUsers(response.data);
      } catch (error) {
        toast.error('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="admin-users">
      <h1>User Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.firstName} {user.surname}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                {/* Add edit/delete buttons */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;