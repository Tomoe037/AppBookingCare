import axios from "axios";

export const saveDoctorInfoAPI = async (data) => {
  const res = await axios.post("/api/doctors/save-info", data);
  return res.data;
};