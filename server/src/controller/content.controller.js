import generateContent from '../services/gemenai.service.js';

export async function generateRecipe(req,res){
    const dishData=req.body
    if(!dishData.dish || !dishData.ingredients){
        return res.status(400).json({error:"Dish name and ingredients are required"})
    }
    const value={
        dish: dishData.dish,
        ingredients: dishData.ingredients
    }
    const data=await generateContent(value);
    res.send(data.text)
}