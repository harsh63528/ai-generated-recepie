import { create } from "zustand";
import { fetchContent } from "../api/content.apis.js";


const useContent = create((set) => ({
  content: null,
  contentLoading: false,
  setContent: (content) => set({ content }),
  getContent: async (data) => {
    set({ contentLoading: true });
    try {
      set({ contentLoading: true });
      const contentValue=await fetchContent(data);
      console.log("Fetched content:", contentValue);
      set({ content: contentValue });
    } catch (error) {
      console.error("Error fetching content:", error.message);
    } finally {
      set({ contentLoading: false });
    }
  }

}));

export default useContent;