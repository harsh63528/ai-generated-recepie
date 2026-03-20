import instance from "./axios.instance";

export const fetchContent = async (data) => {
    try {
        const { recipeName, ingredients, difficulty } = data;
        const response=await instance.get('/content', {
            params: {
                dish: recipeName,
                ingridients: ingredients,
                level: difficulty
            }
            
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching content:", error.message);

    }
}