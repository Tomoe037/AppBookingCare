import axios from 'axios';

const API_URL = import.meta.env.VITE_API_ADMIN;
const getAllcodeByType = async (type) => {
    const res = await axios.get(`${API_URL}/allcode?type=${type}`);
    return res.data.data;
  };

  export  {
    getAllcodeByType 
  }