import  { PrismaClient } from '@prisma/client'
import useAxios from '../hooks/useAxios'
let prisma = null

import knex from '../database/knex'

export default class RecipeController{
    table = 'recipes'
    constructor(){
        
    }
    
    async get(id){
        return await knex.table(this.table).select().where({
            id
        })
    }
    
    async listFeatured(){
        return useAxios(`/recipes/random/20`, 'get')

    }
}