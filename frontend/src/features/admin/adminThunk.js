// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getAdminList, addAdminService, deleteAdminService } from './adminService';

// // Lấy danh sách admin
// export const fetchAdminList = createAsyncThunk(
//   'admin/fetchAdminList',
//   async (_, thunkAPI) => {
//     try {
//       const data = await getAdminList();
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// // Thêm admin
// export const addAdmin = createAsyncThunk(
//   'admin/addAdmin',
//   async (adminData, thunkAPI) => {
//     try {
//       const data = await addAdminService(adminData);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// // Xóa admin
// export const deleteAdmin = createAsyncThunk(
//   'admin/deleteAdmin',
//   async (adminId, thunkAPI) => {
//     try {
//       const id = await deleteAdminService(adminId);
//       return id;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );
