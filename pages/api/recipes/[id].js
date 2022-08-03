import RecipeController from "../../../controllers/RecipeController"


export default async function handler(req, res){
    console.log("🚀 ~ file: [id].js ~ line 5 ~ handle ~ req", req.query)
    const recipeController = new RecipeController()
    const recipe = await recipeController.get(req.query.id)
    console.log(await recipe)
    return res.json(recipe)
}