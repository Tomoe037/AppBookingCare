import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllcodeByType ,createUser} from './adminService.js';

 const fetchAllcodeByType = createAsyncThunk(
  'admin/fetchAllcodeByType',
  async (type) => {
    const data = await getAllcodeByType(type);
    return { type, data };
  }
);

const createNewUser = createAsyncThunk(
  'admin/createNewUser',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await createUser(formData); // gọi từ service
      return res;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Tạo user thất bại');
    }
  }
);

export {
    fetchAllcodeByType,createNewUser,
}