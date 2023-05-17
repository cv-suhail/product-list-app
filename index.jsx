import axios from 'axios';

const API_URL = 'https://fakestoreapi.com'

// const API_URL = 'http://apitextile.eyeterp.com'  
// **************  Your API is not working :( 
//                 Getting Bag Gateway 502 error; 
//                 That's why i choose fakestoreapi  ***************************************

export const getAllProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};

export const getProductById = async (id) => {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
};

export const createProduct = async (product) => {
    const response = await axios.post(`${API_URL}/products`, product);
    return response.data;
};

export const updateProduct = async (id, product) => {
    const response = await axios.put(`${API_URL}/products/${id}`, product);
    return response.data;
};

export const deleteProduct = async (id) => {
    const response = await axios.delete(`${API_URL}/products/${id}`);
    return response.data;
};

//comment codes for eyet API

// export const getAllProducts = async () => {
//     const response = await axios.get(`${API_URL}/product/viewproduct`);
//     return response.data;
// };

// export const getProductById = async (id) => {
//     const response = await axios.get(`${API_URL}/product/productViewById/${id}`);
//     return response.data;
// };

// export const createProduct = async (product) => {
//     const response = await axios.post(`${API_URL}/product/addproduct`, product);
//     return response.data;
// };

// export const updateProduct = async (id, product) => {
//     const response = await axios.put(`${API_URL}/product/editproduct/${id}`, product);
//     return response.data;
// };

// export const deleteProduct = async (id) => {
//     const response = await axios.delete(`${API_URL}/product/deleteproduct/${id}`);
//     return response.data;
// };
