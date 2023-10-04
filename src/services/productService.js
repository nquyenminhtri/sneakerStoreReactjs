import axios from '../axios';
const getAllCategory=(inputId)=>{
    return axios.get(`/api/get-all-category?id=${inputId}`)
}
const getAllProducts=(inputId)=>{
    return axios.get(`/api/get-all-product?id=${inputId}`)
}

export{getAllProducts,getAllCategory}