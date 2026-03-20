import generateContent from '../services/gemenai.service.js';

export async function generateRecipe(req, res) {
  try {
    let { dish = "", ingredients = "", level = "easy" } = req.body;

    // Convert string → array
    let ingredientsArray = [];

    if (ingredients) {
      ingredientsArray = ingredients.split(",").map(i => i.trim());
    }

    // Validation (at least one required)
    if (!dish && ingredientsArray.length === 0) {
      return res.status(400).json({
        message: "Provide either dish or ingredients"
      });
    }

    // Normalize level
    if (!["easy", "medium", "hard"].includes(level)) {
      level = "easy";
    }

    const data = {
      dish,
      ingredients: ingredientsArray,
      level
    };

    const recipe = await generateContent(data);

    return res.status(200).json({
      success: true,
      data: recipe
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "An error occurred while generating the recipe"
    });
  }
}