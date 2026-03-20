import instance from "./axios.instance";

export const fetchContent = async (data) => {
    try {
        const response=await instance.post('/content', data);
        return response.data;
    } catch (error) {
        console.error("Error fetching content:", error.message);

    }
}