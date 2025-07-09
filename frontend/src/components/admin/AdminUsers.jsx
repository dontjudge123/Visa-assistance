// src/pages/admin/AdminUsers.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/GlobalContext';
import axios from 'axios';

const AdminUsers = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]); // Always assume an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/admin/users`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            },
            signal: controller.signal
          }
        );

        console.log('[AdminUsers] Response:', response.data);

        let extracted = [];

        if (Array.isArray(response.data)) {
          extracted = response.data;
        } else if (Array.isArray(response.data.users)) {
          extracted = response.data.users;
        } else if (Array.isArray(response.data.data?.users)) {
          extracted = response.data.data.users;
        }

        if (!Array.isArray(extracted)) {
          throw new Error('Users data is not an array');
        }

        if (isMounted) {
          setUsers(extracted);
          setError(null);
        }
      } catch (err) {
        console.error('[AdminUsers] Fetch error:', err);
        if (isMounted) {
          setError(
            err.response?.data?.message ||
            err.message ||
            'Failed to fetch users.'
          );
          setUsers([]); // Set to empty array to avoid crash
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const filteredUsers = Array.isArray(users)
    ? users.filter(user => {
        const name = `${user.firstName || ''} ${user.surname || ''}`.toLowerCase();
        const email = user.email?.toLowerCase() || '';
        return name.includes(searchTerm.toLowerCase()) || email.includes(searchTerm.toLowerCase());
      })
    : [];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your system including their name, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link
            to="/admin/users/new"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Add user
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />

        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Name</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Email</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Role</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-4 py-2 text-right text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-sm text-gray-500">
                    No users found.
                  </td>
                </tr>
              ) : (
                filteredUsers.map(user => (
                  <tr key={user._id || user.id}>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      {user.firstName || 'N/A'} {user.surname || ''}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-500">{user.email || 'N/A'}</td>
                    <td className="px-4 py-2 text-sm">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {user.role || 'user'}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        user.isVerified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {user.isVerified ? 'Verified' : 'Pending'}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm text-right space-x-2">
                      <Link to={`/admin/users/${user._id || user.id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </Link>
                      <button className="text-red-600 hover:text-red-900" onClick={() => {}}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
