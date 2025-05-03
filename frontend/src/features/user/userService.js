import axios from 'axios';
const API_URL = import.meta.env.VITE_API_USER;

 const fetchTopDoctorsAPI = async (limit = 5) => {
  const res = await axios.get(`${API_URL}/top-doctor-home?limit=${limit}`);
  return res.data;
};

export{
    fetchTopDoctorsAPI
}