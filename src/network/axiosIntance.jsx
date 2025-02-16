// import axios from 'axios'

// export const BASE_URL = 'https://dummyjson.com/';

// const axiosInstance = axios.create({
//     baseURL: BASE_URL,
//     timeout: 10000
// });

// export const network = {
//     getAll: async (url) => {

//         let responseData = [];
//         await axiosInstance.get(`${url}`)
//             .then(res => {
//                 responseData = res.data;
//             })
//             .catch(err => {
//                 console.log('Error', err);
//                 throw err
//             })
//         return responseData;
//     },
//     add: async (url, data) => {
//         await axiosInstance.post(`${url}`, data);
//     },
//     deleteItem: async (url, id) => {
//         await axiosInstance.delete(`${url}/${id}`)
//     },
// }