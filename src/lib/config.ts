// API configuration for different environments
export const API_CONFIG = {
  // In development, use the proxy (localhost:3001/api)
  // In production, use your Railway backend URL
  baseURL: import.meta.env.DEV 
    ? 'http://localhost:3001' // Local backend in development
    : import.meta.env.VITE_RAILWAY_BACKEND_URL || 'https://your-backend-url.railway.app', // Railway backend in production
  
  endpoints: {
    articles: '/api/articles',
    generateDaily: '/api/articles/generate-daily',
    articleById: (id: string) => `/api/articles/${id}`,
    articlesByCategory: (category: string) => `/api/articles/category/${category}`,
  }
};

// Helper function to build full API URLs
export const buildApiUrl = (endpoint: string) => {
  return `${API_CONFIG.baseURL}${endpoint}`;
};
