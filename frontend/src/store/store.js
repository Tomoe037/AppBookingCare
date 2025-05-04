// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'; 
import adminReducer from '../features/admin/adminSlice';
import  useReducer  from '../features/user/userSlice';
import  doctorReducer  from '../features/doctor/doctorSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    user: useReducer,
    doctor: doctorReducer,
  },
});


export default store;
