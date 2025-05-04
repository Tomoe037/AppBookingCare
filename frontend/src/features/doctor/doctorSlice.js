import { createSlice } from "@reduxjs/toolkit";
import {
  saveDoctorInfoThunk,
  fetchAllDoctorsThunk,
  fetchDoctorDetailThunk,
} from "./doctorThunk.js";

const initialState = {
  selectedDoctor: null,
  contentMarkdown: "",
  contentHTML: "",
  doctorDescription: "",
  loading: false,
  error: null,
  success: false,
  listDoctor: [],
  loadingDoctorList: false,
  errorDoctorList: null,
  doctorDetail: {
    contentMarkdown: "",
    contentHTML: "",
    description: "",
    hasData: false,
    loading: false,
    error: null,
    loaded: false,
  },
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
    },
    resetForm: (state) => {
      state.selectedDoctor = null;
      state.contentMarkdown = "";
      state.contentHTML = "";
      state.doctorDescription = "";
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDoctorsThunk.pending, (state) => {
        state.loadingDoctorList = true;
        state.errorDoctorList = null;
      })
      .addCase(fetchAllDoctorsThunk.fulfilled, (state, action) => {
        state.loadingDoctorList = false;
        state.listDoctor = action.payload;
      })
      .addCase(fetchAllDoctorsThunk.rejected, (state, action) => {
        state.loadingDoctorList = false;
        state.errorDoctorList = action.payload || action.error.message;
      })
      .addCase(saveDoctorInfoThunk.pending, (state) => {
        state.loading = true;
        state.error = null;

        state.success = false;
      })
      .addCase(saveDoctorInfoThunk.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(saveDoctorInfoThunk.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchDoctorDetailThunk.pending, (state) => {
        state.doctorDetail.loading = true;
        state.doctorDetail.error = null;
      })
      .addCase(fetchDoctorDetailThunk.fulfilled, (state, action) => {
        state.doctorDetail.loading = false;
        state.doctorDetail.loaded = true;
        if (action.payload.hasData) {
          state.doctorDetail.hasData = true;
          state.contentMarkdown = action.payload.data.contentMarkdown;
          state.contentHTML = action.payload.data.contentHTML;
          state.doctorDescription = action.payload.data.description;
          state.doctorDetail.firstName = action.payload.data.firstName;
          state.doctorDetail.lastName = action.payload.data.lastName;
          state.doctorDetail.position = action.payload.data.position;
          state.doctorDetail.image = action.payload.data.image;
        } else {
          state.doctorDetail.hasData = false;
          state.contentMarkdown = "";
          state.contentHTML = "";
          state.doctorDescription = "";
        }
      })
      .addCase(fetchDoctorDetailThunk.rejected, (state, action) => {
        state.doctorDetail.loading = false;
        state.doctorDetail.error = action.payload || action.error.message;
      });
  },
});

export const {
  setSelectedDoctor,
  setContentMarkdown,
  setContentHTML,
  setDoctorDescription,
  resetForm,
} = doctorSlice.actions;
export default doctorSlice.reducer;
