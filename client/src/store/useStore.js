import { create } from 'zustand';
import instance from '../api/axios.instance.js';
import { useNavigate } from 'react-router-dom';

const useStore = create((set) => ({
  user: null,
  loginloading:false,
  registerloading:false,
  profileloading:false,
  logoutloading:false,
    setLogoutLoading:(logoutloading)=>set({logoutloading}),
  setLoginLoading:(loginloading)=>set({loginloading}),
  setRegisterLoading:(registerloading)=>set({registerloading}),
  setProfileLoading:(profileloading)=>set({profileloading}),
  setUser: (user) => set({ user }),
  logIn: async (data) => {
try {
  set({loginloading:true})
  const userId= await instance.post('/auth/login', data);
   console.log('User ID:', userId.data.user);
  set({ user: userId.data.user });
 
} catch (error) {
    console.error('Error fetching user:', error);
} finally{
  set({loginloading:false})
}
  },
  Profile: async () => {
    try {
      set({profileloading:true})
      let response = await instance.get('/auth/profile');
      set({ user: response.data.user });
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    } finally{ set({profileloading:false})}
  },
  register: async(data)=>{
    try {
      set({registerloading:true})
      let response= await instance.post('/auth/register',data);
      console.log('Registration response:', response.data);
       set({ user: response.data.user });
    } catch (error) {
      console.error('Error registering user:', error.message);
    } finally{set({registerloading:false})}
  },
  logout: async()=>{

  try {
    set({logoutloading:true})
      return await instance.delete('/auth/logout');
     } catch (error) {
      console.error(error.message)
     }finally{
      set({logoutloading:false})
     }

  }

}));

export default useStore;