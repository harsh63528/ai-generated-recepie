import generateContent from '../services/gemenai.service.js';

export async function generateRecipe(req,res){
    try {
        const {dish,ingridients,level}=req.query
        if(!dish ||(!ingridients || ingridients.length===0) ){
            return res.status(400).json({message:"Dish or ingredients are required"})
        }
        if(ingridients && !Array.isArray(ingridients)){
            return res.status(400).json({message:"Ingredients should be an array"})
        }

        const data={
            dish,
            ingredients:ingridients,
            level:level || "easy"
        }
        const recipe=await generateContent(data)
        return res.status(200).json(recipe)

        
    } 
    catch (error) {
        res.status(500).json({message:"An error occurred while generating the recipe"})
    }
}