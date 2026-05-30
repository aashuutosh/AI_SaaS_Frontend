// src/utils/apiClient.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/v1';

// Helper function to handle all requests
async function fetchAPI(endpoint, options = {}) {
    const token = localStorage.getItem('access_token'); // Or however you store JWTs
    
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers,
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'API request failed');
    }

    return response.json();
}

// ----------------------------------------------------
// YOUR 30 API ENDPOINTS WILL BE EXPORTED FROM HERE
// ----------------------------------------------------

export const aiAPI = {
    generateShortContent: (prompt) => 
        fetchAPI('/ai/short-content', { method: 'POST', body: JSON.stringify({ prompt }) }),
    
    // You will add more AI routes here later:
    // generateImage: (prompt) => fetchAPI('/ai/image', { method: 'POST', body: JSON.stringify({ prompt }) }),
};

export const userAPI = {
    getProfile: () => fetchAPI('/users/me', { method: 'GET' }),
    // updateProfile: (data) => fetchAPI('/users/me', { method: 'PUT', body: JSON.stringify(data) }),
};