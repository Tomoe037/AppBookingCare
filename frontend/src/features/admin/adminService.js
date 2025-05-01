import axios from 'axios';

const API_URL = import.meta.env.VITE_API_ADMIN;
const getAllcodeByType = async (type) => {
    const res = await axios.get(`${API_URL}/allcode?type=${type}`);
    return res.data.data;
  };
  const createUser = async (data) => {
    const res = await axios.post(`${API_URL}/create-user`, data);
    return res.data;
  };
  const getAllUsers = async () => {
    const res = await axios.get(`${API_URL}/get-users`);
    return res.data.data;
  };
 const getUserById = async (id) => {
    const res = await axios.get(`${API_URL}/user/${id}`);
    return res.data;
  };
  const updateUserService = async (id, data) => {
    const res = await axios.put(`${API_URL}/update-user/${id}`, data);
    return res.data;
  };
  
  export  {
    getAllcodeByType ,createUser,getAllUsers,updateUserService,getUserById
  }