import api from './api';
import { User, UpdateProfileData, CreateUserData, UpdateUserData, UserFilters, UserResponse, RegisterData } from '../types/user';
import {LoginCredentials} from '../types/auth';


const userService = {
  async register(data: RegisterData): Promise<User> {
    const response = await api.post('/auth/register', data);
    return response.data;
  },

  async login(data: LoginCredentials): Promise<{ user: User; token: string }> {
    const response = await api.post<{ user: User; token: string }>('/auth/login', data);
    return response.data;
  },

  async getCurrentUser(): Promise<User> {
    const response = await api.get<User>('/users/me');
    return response.data;
  },

  getProfile: async (): Promise<User> => {
    const response = await api.get('/users/profile');
    return response.data;
  },

  updateProfile: async (data: UpdateProfileData): Promise<User> => {
    const response = await api.put('/users/profile', data);
    return response.data;
  },

  getUsers: async (filters: UserFilters = {}): Promise<UserResponse> => {
    const response = await api.get('/users', { params: filters });
    return response.data;
  },

  getUser: async (id: string): Promise<User> => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  createUser: async (data: CreateUserData): Promise<User> => {
    const response = await api.post('/users', data);
    return response.data;
  },

  updateUser: async (id: string, data: UpdateUserData): Promise<User> => {
    const response = await api.put(`/users/${id}`, data);
    return response.data;
  },

  deleteUser: async (id: string): Promise<void> => {
    await api.delete(`/users/${id}`);
  },
};

export default userService; 