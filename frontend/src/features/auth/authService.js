import axios from 'axios';
const API = 'http://localhost:3715/api/auth';

 const registerAPI = (data) => axios.post(`${API}/register`, data);
// export const loginAPI = (data) => axios.post(`${API}/login`, data);
export{
    registerAPI
}