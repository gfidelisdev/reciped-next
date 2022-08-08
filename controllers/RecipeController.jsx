import  { PrismaClient } from '@prisma/client'
import useAxios from '../hooks/useAxios'
let prisma = null
if (typeof window === 'undefined') {
    prisma = new PrismaClient()
}

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