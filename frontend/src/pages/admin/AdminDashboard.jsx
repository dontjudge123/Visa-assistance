import { useState, useEffect } from 'react';
import { useAuth } from '../../context/GlobalContext';
import axios from 'axios';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({
    totalUsers: 0,
    verifiedUsers: 0,
    pendingVerifications: 0,
    admins: 0
  });
  const [activities, setActivities] = useState([]);
  const [users, setUsers] = useState([]);
  const [settings, setSettings] = useState({
    registrationOpen: true,
    maintenanceMode: false,
    emailVerificationRequired: true
  });
  const [loading, setLoading] = useState({
    dashboard: true,
    users: false,
    settings: false
  });
  const [error, setError] = useState(null);

  const token = localStorage.getItem('accessToken');
  
  if (!token) {
    console.log('No access token found. Redirecting to login.');
    return;
  }

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const [statsRes, activitiesRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_BASE_URL}/admin/dashboard`, {
            headers: { Authorization: `Bearer ${token}` }
          }),
          axios.get(`${import.meta.env.VITE_API_BASE_URL}/admin/activities`, {
            headers: { Authorization: `Bearer ${token}` }
          })
        ]);
        
        setStats(statsRes.data.stats);
        setActivities(activitiesRes.data.activities);
        setLoading(prev => ({ ...prev, dashboard: false }));
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load dashboard data');
        setLoading(prev => ({ ...prev, dashboard: false }));
      }
    };

    fetchDashboardData();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(prev => ({ ...prev, users: true }));
      const token = localStorage.getItem('accessToken');
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/admin/users`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(response.data.users);
      setLoading(prev => ({ ...prev, users: false }));
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load users');
      setLoading(prev => ({ ...prev, users: false }));
    }
  };

  const fetchSettings = async () => {
    try {
      setLoading(prev => ({ ...prev, settings: true }));
      const token = localStorage.getItem('accessToken');
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/admin/settings`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSettings(response.data.settings);
      setLoading(prev => ({ ...prev, settings: false }));
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load settings');
      setLoading(prev => ({ ...prev, settings: false }));
    }
  };

  const updateUserRole = async (userId, newRole) => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.patch(
        `${import.meta.env.VITE_API_BASE_URL}/admin/users/${userId}/role`,
        { role: newRole },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUsers(users.map(user => 
        user._id === userId ? response.data.user : user
      ));
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update user role');
    }
  };

  const updateSettings = async (newSettings) => {
    try {
      setLoading(prev => ({ ...prev, settings: true }));
      const token = localStorage.getItem('accessToken');
      const response = await axios.patch(
        `${import.meta.env.VITE_API_BASE_URL}/admin/settings`,
        newSettings,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSettings(response.data.settings);
      setLoading(prev => ({ ...prev, settings: false }));
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update settings');
      setLoading(prev => ({ ...prev, settings: false }));
    }
  };

  useEffect(() => {
    if (activeTab === 'users') {
      fetchUsers();
    } else if (activeTab === 'settings') {
      fetchSettings();
    }
  }, [activeTab]);

  if (loading.dashboard && activeTab === 'overview') {
    return (
      <div className="flex justify-center items-center h-screen">
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-500">Welcome, {user?.firstName}</span>
            <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
              {user?.firstName?.charAt(0)}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard 
            name="Total Users" 
            value={stats.totalUsers}
            icon="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
          <StatCard 
            name="Verified Users" 
            value={stats.verifiedUsers}
            icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <StatCard 
            name="Pending Verifications" 
            value={stats.pendingVerifications}
            icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <StatCard 
            name="Admin Users" 
            value={stats.admins}
            icon="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {['overview', 'users', 'analytics', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {activeTab === 'overview' && 'System Overview'}
              {activeTab === 'users' && 'User Management'}
              {activeTab === 'analytics' && 'Analytics'}
              {activeTab === 'settings' && 'System Settings'}
            </h3>
          </div>
          
          <div className="px-4 py-5 sm:p-6">
            {activeTab === 'overview' && (
              <div>
                <h4 className="text-md font-medium mb-4">Recent User Signups</h4>
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">User</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Joined</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {activities.map(activity => (
                        <tr key={activity._id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                            {activity.firstName} {activity.surname}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{activity.email}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {new Date(activity.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div>
                {loading.users ? (
                  <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-md font-medium">User Management</h4>
                      <span className="text-sm text-gray-500">
                        Showing {users.length} users
                      </span>
                    </div>
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">User</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Joined</th>
                            {/* <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Actions</th> */}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {users.map(user => (
                            <tr key={user._id}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                                {user.firstName} {user.surname}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.email}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <select
                                  value={user.role}
                                  onChange={(e) => updateUserRole(user._id, e.target.value)}
                                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                >
                                  <option value="user">User</option>
                                  <option value="admin">Admin</option>
                                </select>
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {new Date(user.createdAt).toLocaleDateString()}
                              </td>
                              {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <button className="text-indigo-600 hover:text-indigo-900">
                                  View
                                </button>
                              </td> */}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="text-center py-12">
                <div className="mx-auto h-12 w-12 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mt-2 text-sm font-medium text-gray-900">Analytics Dashboard</h3>
                <p className="mt-1 text-sm text-gray-500">View system usage statistics and metrics.</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                {loading.settings ? (
                  <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Application Settings</h3>
                      </div>
                      <div className="px-4 py-5 sm:p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <label htmlFor="registrationOpen" className="block text-sm font-medium text-gray-700">
                                Registration Open
                              </label>
                              <p className="text-sm text-gray-500">
                                Allow new users to register for accounts
                              </p>
                            </div>
                            <button
                              type="button"
                              className={`${
                                settings.registrationOpen ? 'bg-indigo-600' : 'bg-gray-200'
                              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                              onClick={() => updateSettings({ ...settings, registrationOpen: !settings.registrationOpen })}
                            >
                              <span
                                className={`${
                                  settings.registrationOpen ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                              />
                            </button>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <label htmlFor="maintenanceMode" className="block text-sm font-medium text-gray-700">
                                Maintenance Mode
                              </label>
                              <p className="text-sm text-gray-500">
                                Take the system offline for maintenance
                              </p>
                            </div>
                            <button
                              type="button"
                              className={`${
                                settings.maintenanceMode ? 'bg-indigo-600' : 'bg-gray-200'
                              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                              onClick={() => updateSettings({ ...settings, maintenanceMode: !settings.maintenanceMode })}
                            >
                              <span
                                className={`${
                                  settings.maintenanceMode ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                              />
                            </button>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <label htmlFor="emailVerificationRequired" className="block text-sm font-medium text-gray-700">
                                Email Verification Required
                              </label>
                              <p className="text-sm text-gray-500">
                                Require users to verify their email addresses
                              </p>
                            </div>
                            <button
                              type="button"
                              className={`${
                                settings.emailVerificationRequired ? 'bg-indigo-600' : 'bg-gray-200'
                              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                              onClick={() => updateSettings({ ...settings, emailVerificationRequired: !settings.emailVerificationRequired })}
                            >
                              <span
                                className={`${
                                  settings.emailVerificationRequired ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

const StatCard = ({ name, value, icon }) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="px-4 py-5 sm:p-6">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
          <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
          </svg>
        </div>
        <div className="ml-5 w-0 flex-1">
          <dt className="text-sm font-medium text-gray-500 truncate">{name}</dt>
          <dd className="text-2xl font-semibold text-gray-900">{value}</dd>
        </div>
      </div>
    </div>
  </div>
);

export default AdminDashboard;