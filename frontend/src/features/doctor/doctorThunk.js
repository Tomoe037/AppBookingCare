import { createAsyncThunk } from "@reduxjs/toolkit";
import { saveDoctorInfoAPI } from "./doctorService.js";

export const saveDoctorInfoThunk = createAsyncThunk(
  "doctor/saveDoctorInfo",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const data = {
        doctorId: state.doctor.selectedDoctor?.value,
        contentMarkdown: state.doctor.contentMarkdown,
        contentHTML: state.doctor.contentHTML,
        description: state.doctor.doctorDescription,
        doctorName: state.doctor.selectedDoctor?.label
      };
      console.log(" Dữ liệu gửi đi saveDoctorInfoThunk :", data);
      const response = await saveDoctorInfoAPI(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);