import { User } from './user';

export  interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}


export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface RegisterData extends LoginCredentials {
    name: string;
  }
  
  export interface AuthResponse {
    user: User;
    token: string;
    refreshToken: string;
  }

  export interface RefreshTokenResponse {
    token: string;
  }