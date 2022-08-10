import useAxios from '../hooks/useAxios'
<<<<<<< HEAD
=======
let prisma = null

// import knex from '../database/knex'
>>>>>>> 365c9c517d14a0b52d85f3c438ce6d77bfede485

export default class RecipeController{
    table = 'recipes'
    constructor(){
        
    }
    
    async get(id){
<<<<<<< HEAD
=======
        // return await knex.table(this.table).select().where({
        //     id
        // })
>>>>>>> 365c9c517d14a0b52d85f3c438ce6d77bfede485
    }
    
    async listFeatured(){
        return useAxios(`/recipes/random/20`, 'get')

    }
}