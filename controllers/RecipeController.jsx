import  { PrismaClient } from '@prisma/client'
let prisma = null
if (typeof window === 'undefined') {
    prisma = new PrismaClient()
}

export default class RecipeController{
    table = 'recipes'
    constructor(){
        
    }
    
    async get(id){
        console.log(prisma)
        return await prisma.recipes.findUnique({
            where:{
                id
            }
        })
    }
}