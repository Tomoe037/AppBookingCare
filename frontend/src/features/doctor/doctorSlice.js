import { createSlice } from "@reduxjs/toolkit";
import { saveDoctorInfoThunk } from "./doctorThunk.js";

const initialState = {
  selectedDoctor: null,
  contentMarkdown: "",
  contentHTML: "",
  doctorDescription: "",
  loading: false,
  error: null,
};

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    setSelectedDoctor: (state, action) => {
      state.selectedDoctor = action.payload;
    },
    setContentMarkdown: (state, action) => {
      state.contentMarkdown = action.payload;
    },
    setContentHTML: (state, action) => {
      state.contentHTML = action.payload;
    },
    setDoctorDescription: (state, action) => {
      state.doctorDescription = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(saveDoctorInfoThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(saveDoctorInfoThunk.fulfilled, (state) => {
      state.loading = false;
    })
    .addCase(saveDoctorInfoThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    });
  }
});

export const {
  setSelectedDoctor,
  setContentMarkdown,
  setContentHTML,
  setDoctorDescription
} = doctorSlice.actions;
export default doctorSlice.reducer;
