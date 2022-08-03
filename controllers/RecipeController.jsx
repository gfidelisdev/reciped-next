import  { PrismaClient } from '@prisma/client'
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
}