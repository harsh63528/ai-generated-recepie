import { create } from "zustand";
import { fetchContent } from "../api/content.apis.js";


const useContent = create((set) => ({
  content: null,
  setContent: (content) => set({ content }),
  getContent: async (data) => {
    try {
      const content=await fetchContent(data);
      console.log("Fetched content:", content);
      set({ content });
    } catch (error) {
      console.error("Error fetching content:", error.message);
    }
  }

}));

export default useContent;