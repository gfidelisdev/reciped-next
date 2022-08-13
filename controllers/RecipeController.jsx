import useAxios from '../hooks/useAxios'

const RecipeController = {
    table: 'recipes',
    get: async function(id){
        return useAxios(`/recipe/${id}`)
    },
    listFeatured: async function(){
        return useAxios(`/recipes/random/20`, 'get')

    }
}

export default RecipeController