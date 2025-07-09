// src/pages/admin/AdminSettings.jsx
import { useState } from 'react';
import { useAuth } from '../../context/GlobalContext';
import { toast } from 'react-toastify';

const AdminSettings = () => {
  const { user } = useAuth();
  const [settings, setSettings] = useState({
    siteName: 'Anmeldung Helper',
    maintenanceMode: false,
    registrationEnabled: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would typically make an API call to save settings
      toast.success('Settings updated successfully');
    } catch (error) {
      toast.error('Failed to update settings');
    }
  };

  return (
    <div className="admin-settings">
      <h1>Admin Settings</h1>
      <p>Welcome, {user?.firstName}! Here you can configure system settings.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="siteName">Site Name</label>
          <input
            type="text"
            id="siteName"
            name="siteName"
            value={settings.siteName}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group checkbox">
          <input
            type="checkbox"
            id="maintenanceMode"
            name="maintenanceMode"
            checked={settings.maintenanceMode}
            onChange={handleChange}
          />
          <label htmlFor="maintenanceMode">Maintenance Mode</label>
        </div>
        
        <div className="form-group checkbox">
          <input
            type="checkbox"
            id="registrationEnabled"
            name="registrationEnabled"
            checked={settings.registrationEnabled}
            onChange={handleChange}
          />
          <label htmlFor="registrationEnabled">Allow New Registrations</label>
        </div>
        
        <button type="submit" className="btn-save">
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default AdminSettings;