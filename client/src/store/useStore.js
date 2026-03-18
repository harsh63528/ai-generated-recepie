import { create } from 'zustand';
import instance from '../api/axios.instance.js';

const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  getUser: async (data) => {
try {
  const userId= await instance.post('/auth/login', data);
   console.log('User ID:', userId);
  set({ user: userId });
 
} catch (error) {
    console.error('Error fetching user:', error);
}
  }
}));

export default useStore;