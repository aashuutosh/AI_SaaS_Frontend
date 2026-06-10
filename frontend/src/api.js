import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const backendAPI = {
  // --- AI ENDPOINTS ---
  chat: async (data) => {
    const response = await apiClient.post('/v1/ai/chat/', data);
    return response.data;
  },
  summarize: async (data) => {
    const response = await apiClient.post('/v1/ai/summarize/', data);
    return response.data;
  },
  generateImage: async (data) => {
    const response = await apiClient.post('/v1/ai/image/', data);
    return response.data;
  },
  longForm: async (data) => {
    const response = await apiClient.post('/v1/ai/long-form/', data);
    return response.data;
  },

  // --- AUTHENTICATION & USERS ---
  googleLogin: async (tokenData) => {
    const response = await apiClient.post('/v1/auth/google/', tokenData);
    return response.data;
  },
  getUserProfile: async () => {
    const response = await apiClient.get('/v1/users/me/');
    return response.data;
  },

  // --- USER HISTORY ---
  getChatHistory: async () => {
    const response = await apiClient.get('/v1/history/');
    return response.data;
  },
  clearHistory: async (historyId) => {
    const response = await apiClient.delete(`/v1/history/${historyId}/`);
    return response.data;
  },

  // --- SUBSCRIPTIONS & CREDITS ---
  getPlans: async () => {
    const response = await apiClient.get('/v1/subscriptions/plans/');
    return response.data;
  },
  upgradePlan: async (planData) => {
    const response = await apiClient.post('/v1/subscriptions/upgrade/', planData);
    return response.data;
  },

  // --- SYSTEM ---
  checkHealth: async () => {
    const response = await apiClient.get('/v1/health/');
    return response.data;
  }
};