import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllcodeByType ,createUser,getAllUsers,updateUserService,getUserById,deleteUserById} from './adminService.js';

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
      const res = await createUser(formData); 
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

const deleteUser = createAsyncThunk(
  'admin/deleteUser',
  async (id, thunkAPI) => {
    try {
      await deleteUserById(id);
      return id; 
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Lỗi khi xoá người dùng');
    }
  }
);


export {
    fetchAllcodeByType,createNewUser,fetchAllUsers,updateUser,fetchUserById,deleteUser
}