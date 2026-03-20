import { create } from 'zustand';
import instance from '../api/axios.instance.js';

const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logIn: async (data) => {
try {
  console.log('Fetching user with data:', data);
  console.log('Axios instance:', instance);
  const userId= await instance.post('/auth/login', data);
   console.log('User ID:', userId.data.user);
  set({ user: userId.data.user });
 
} catch (error) {
    console.error('Error fetching user:', error);
}
  },
  Profile: async () => {
    try {
      let response = await instance.get('/auth/profile');
      set({ user: response.data.user });
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  },
  register: async(data)=>{
    try {
      let response= await instance.post('/auth/register',data);
      console.log('Registration response:', response.data);
       set({ user: response.data.user });
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  }

}));

export default useStore;