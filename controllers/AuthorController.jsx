import runAxios from "../plugins/axios";

const AuthorController = {
    table: 'authors',
    get: async function(id){
        return runAxios(`/author/${id}`)
    },
    list: async ()=>runAxios('/authors')
}

export default AuthorController