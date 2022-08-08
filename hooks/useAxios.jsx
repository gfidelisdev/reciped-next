import React from "react";
import axios from "axios";
const baseUrl = 'http://localhost:53001';
const headers= {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}
let axiosOptions = {
    headers
};
function useAxios(url, method, options=axiosOptions) {


    async function execute(){
        console.log(axiosOptions)
        return await axios(url, axiosOptions)
    }
    if (!(url.startsWith('http://') || url.startsWith('https://'))) {
        url = baseUrl+url
    }
    axiosOptions = {method, ...options, ...axiosOptions}

    return (execute())
    
}

export default useAxios;
