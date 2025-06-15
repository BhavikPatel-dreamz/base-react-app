import api from './api';
import { AuthResponse, LoginCredentials, RegisterData } from '../types/auth';
import { User } from '../types/user';

const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/login', credentials);
    const { token, refreshToken } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    return response.data;
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/register', data);
    const { token, refreshToken } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    return response.data;
  },

  logout: (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  },

  refreshToken: async (refreshToken: string): Promise<{ token: string }> => {
    const response = await api.post<{ token: string }>('/auth/refresh', { refreshToken });
    const { token } = response.data;
    localStorage.setItem('token', token);
    return response.data;
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await api.get<User>('/auth/me');
    return response.data;
  },
};

export default authService; 