import { create } from "zustand";
import instance from "../api/axios.instance.js";

const useContent = create((set) => ({
  content: null,
  setContent: (content) => set({ content }),
  getContent:async()=>{
    const response= await instance.get('/content');
    set({content:response.data.content})
  }

}));