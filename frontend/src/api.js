import axios from 'axios';

// Automatically uses your Live Backend URL on Vercel/Netlify, or localhost when testing locally
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const backendAPI = {
  // --- AI ENDPOINTS (From your ai.py router) ---
  
  chat: async (data) => {
    // Expected data format: { prompt: "Your text here" }
    const response = await apiClient.post('/chat', data);
    return response.data;
  },
  
  summarize: async (data) => {
    const response = await apiClient.post('/summarize', data);
    return response.data;
  },
  
  generateImage: async (data) => {
    const response = await apiClient.post('/image', data);
    return response.data;
  },

  longForm: async (data) => {
    const response = await apiClient.post('/long-form', data);
    return response.data;
  },

  // --- SYSTEM ENDPOINTS (From your main.py) ---
  
  checkHealth: async () => {
    // Notice this one has /v1/ because you hardcoded it in main.py
    const response = await apiClient.get('/v1/health');
    return response.data;
  }
};