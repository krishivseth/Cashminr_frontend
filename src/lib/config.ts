// API configuration for different environments
export const API_CONFIG = {
  // In development, use the proxy (localhost:3001/api)
  // In production, use your Railway backend URL
  baseURL: (import.meta as any).env.DEV 
    ? 'http://localhost:3001' // Local backend in development
    : (import.meta as any).env.VITE_RAILWAY_BACKEND_URL || 'https://cashminrbackend-production.up.railway.app', // Railway backend in production
  
  endpoints: {
    articles: '/api/articles',
    generateDaily: '/api/articles/generate-daily',
    generateHourly: '/api/articles/generate-hourly',
    articleById: (id: string) => `/api/articles/${id}`,
    articleBySlug: (slug: string) => `/api/articles/slug/${slug}`,
    articlesByCategory: (category: string) => `/api/articles/category/${category}`,
  }
};

// Helper function to build full API URLs
export const buildApiUrl = (endpoint: string) => {
  return `${API_CONFIG.baseURL}${endpoint}`;
};
