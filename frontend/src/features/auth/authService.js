import axios from 'axios';
const API = import.meta.env.VITE_API_AUTH;

 const registerAPI = (data) => axios.post(`${API}/register`, data);
// export const loginAPI = (data) => axios.post(`${API}/login`, data);
export{
    registerAPI
}