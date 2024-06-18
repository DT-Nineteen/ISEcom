import {ADMIN_TOKEN} from 'sample/magentoSample';
// Define the User interface
export interface User {
  id: number;
  email: string;
  username: string;
  avatar: string;
  bio: string;
  location: string;
  dob: string; // Date of birth in ISO format
  followers: number;
  following: number;
  posts: number;
  likes: number;
  comments: number;
  createdAt: string; // Timestamp in ISO format
  updatedAt: string; // Timestamp in ISO format
}

// Define the AuthState interface
export interface AuthStateType {
  isAuthenticated: boolean;
  accessToken: string;
  user: User | null;
  refreshToken: string;
  blockedUsers: ReadonlyArray<number>; // List of blocked user IDs
  mutedUsers: ReadonlyArray<number>; // List of muted user IDs
}

// Initial authentication state
export const initialAuthState: AuthStateType = {
  isAuthenticated: false,
  accessToken: '',
  user: null,
  refreshToken: '',
  blockedUsers: [],
  mutedUsers: [],
};
