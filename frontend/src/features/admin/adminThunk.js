import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllcodeByType ,createUser,getAllUsers,updateUserService,getUserById} from './adminService.js';

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

const fetchAllUsers = createAsyncThunk(
  'admin/fetchAllUsers',
  async () => {
    return await getAllUsers();
  }
);

const fetchUserById = createAsyncThunk(
  'admin/fetchUserById',
  async (id, thunkAPI) => {
    try {
      const res = await getUserById(id);
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Lỗi khi tải user');
    }
  }
);


const updateUser = createAsyncThunk(
  'admin/updateUser',
  async ({ id, data }, thunkAPI) => {
    try {
      const res = await updateUserService(id, data);
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Lỗi khi cập nhật người dùng');
    }
  }
);

export {
    fetchAllcodeByType,createNewUser,fetchAllUsers,updateUser,fetchUserById
}