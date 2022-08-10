import useAxios from '../hooks/useAxios'

export default class RecipeController{
    table = 'recipes'
    constructor(){
        
    }
    
    async get(id){
    }
    
    async listFeatured(){
        return useAxios(`/recipes/random/20`, 'get')

    }
}