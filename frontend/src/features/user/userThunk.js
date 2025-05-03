import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTopDoctorsAPI } from './userService.js';

export const fetchTopDoctors = createAsyncThunk(
  'user/fetchTopDoctors',
  async (limit, thunkAPI) => {
    try {
      const data = await fetchTopDoctorsAPI(limit);
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Lỗi khi tải bác sĩ');
    }
  }
);