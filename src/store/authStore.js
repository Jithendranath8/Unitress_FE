import { create } from 'zustand';
import { getUserRole } from '../config/roleConfig';

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  role: null,
  user: null,
  login: (email, password) => {
    const role = getUserRole(email);
    set({isAuthenticated: true, role ,
      user: {
        id: '1',
        email,
        name: email.split('@')[0], 
        role,
      },
    });
  },
  logout: () => set({ isAuthenticated: false,user: null, role : null }),
}));
