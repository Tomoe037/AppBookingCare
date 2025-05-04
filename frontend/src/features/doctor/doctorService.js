import axios from "axios";
const API_URL = import.meta.env.VITE_API_ADMIN;

const getAllDoctorsAPI = async () => {
  const res = await axios.get(`${API_URL}/get-all-doctors`);
  return res.data;
};

 const saveDoctorInfoAPI = async (data) => {
  const res = await axios.post(`${API_URL}/save-info-doctor`, data);
  return res.data;
};
const getDoctorDetailAPI = async (doctorId) => {
  const res = await axios.get(`${API_URL}/get-doctor-info/${doctorId}`);
  return res.data;
};

export{
  saveDoctorInfoAPI,getAllDoctorsAPI,getDoctorDetailAPI
}