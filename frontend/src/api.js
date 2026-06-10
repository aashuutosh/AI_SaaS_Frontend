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
  // --- AI ENDPOINTS ---
  
  chat: async (data) => {
    // UPDATED: Now hitting the exact path from your FastAPI docs!
    const response = await apiClient.post('/v1/ai/chat/), data);
    return response.data;
  },
  
  // (You will need to check your /docs for the exact paths of these other endpoints later!)
  summarize: async (data) => {
    const response = await apiClient.post('/v1/ai/summarize', data);
    return response.data;
  },
  
  generateImage: async (data) => {
    const response = await apiClient.post('/v1/ai/image', data);
    return response.data;
  },

  longForm: async (data) => {
    const response = await apiClient.post('/v1/ai/long-form', data);
    return response.data;
  },

  // --- SYSTEM ENDPOINTS ---
  checkHealth: async () => {
    const response = await apiClient.get('/v1/health');
    return response.data;
  }
};