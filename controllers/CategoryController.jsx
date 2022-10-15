import runAxios from "../plugins/axios";

const CategoryController = {
    table: 'categories',
    get: async function(id){
        return runAxios(`/category/${id}`)
    },
    list: async ()=>runAxios(`/categories`)

}

export default CategoryController