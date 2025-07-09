// src/api/admin.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAdminUsers = async (token) => {
  const response = await axios.get(`${API_BASE_URL}/admin/users`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const updateUserRole = async (userId, role, token) => {
  const response = await axios.patch(
    `${API_BASE_URL}/admin/users/${userId}/role`,
    { role },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response.data;
};