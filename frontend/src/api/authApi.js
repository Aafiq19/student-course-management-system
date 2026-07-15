import axiosInstance from './axios'

export const authApi = {
  login: (credentials) => axiosInstance.post('/auth/login', credentials),
  logout: () => axiosInstance.post('/auth/logout'),
  register: (userData) => axiosInstance.post('/auth/register', userData),
  getCurrentUser: () => axiosInstance.get('/auth/me'),
  refreshToken: () => axiosInstance.post('/auth/refresh'),
}

export default authApi
