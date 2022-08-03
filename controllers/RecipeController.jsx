import knex from '../database/knex';

export default class RecipeController{
    table = 'recipes'
    constructor(){

    }

    async get(id){
        return await knex(this.table).select().where('id',id)
    }
}