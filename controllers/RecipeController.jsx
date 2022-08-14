import runAxios from './../plugins/axios'

const RecipeController = {
    table: 'recipes',
    get: async function(id){
        return runAxios(`/recipe/${id}`)
    },
    listFeatured: async function(){
        return runAxios(`/recipes/random/20`, 'get')

    }
}

export default RecipeController