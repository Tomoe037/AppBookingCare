import { createAsyncThunk } from "@reduxjs/toolkit";
import { saveDoctorInfoAPI, getAllDoctorsAPI,getDoctorDetailAPI } from "./doctorService.js";

const fetchAllDoctorsThunk = createAsyncThunk(
  "doctor/fetchAllDoctors",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getAllDoctorsAPI();
      return res.data.map((doc) => ({
        value: doc.id,
        label: `${doc.positionData.valueVi} ${doc.firstName} ${doc.lastName}`,
      }));
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const saveDoctorInfoThunk = createAsyncThunk(
  "doctor/saveDoctorInfo",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const data = {
        doctorId: state.doctor.selectedDoctor?.value,
        contentMarkdown: state.doctor.contentMarkdown,
        contentHTML: state.doctor.contentHTML,
        description: state.doctor.doctorDescription,
        doctorName: state.doctor.selectedDoctor?.label,
      };
      console.log(" Dữ liệu gửi đi saveDoctorInfoThunk :", data);
      const response = await saveDoctorInfoAPI(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
const fetchDoctorDetailThunk = createAsyncThunk(
  "doctor/fetchDoctorDetail",
  async (doctorId, { rejectWithValue }) => {
    try {
      const res = await getDoctorDetailAPI(doctorId);
      return res;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
export { saveDoctorInfoThunk, fetchAllDoctorsThunk ,fetchDoctorDetailThunk};
