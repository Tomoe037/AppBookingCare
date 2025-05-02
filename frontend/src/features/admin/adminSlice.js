import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllcodeByType,
  createNewUser,
  fetchAllUsers,
  updateUser,deleteUser
} from "./adminThunk.js";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    gender: [],
    role: [],
    position: [],
    userList: [],
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers: {
    clearAdminMessages(state) {
      state.successMessage = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Allcode
      .addCase(fetchAllcodeByType.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllcodeByType.fulfilled, (state, action) => {
        const { type, data } = action.payload;
        state.loading = false;
        if (type === "GENDER") state.gender = data;
        if (type === "ROLE") state.role = data;
        if (type === "POSITION") state.position = data;
      })
      .addCase(fetchAllcodeByType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Lỗi khi tải dữ liệu allcode";
      })

      // Create user
      .addCase(createNewUser.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.error = null;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "Tạo người dùng thành công!";
        state.userList.unshift(action.payload);
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch all users
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.userList = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Lỗi khi tải danh sách người dùng";
      })
      // update user
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.loading = false;
        state.successMessage = "Cập nhật người dùng thành công!";
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //delete-user
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = 'Xoá người dùng thành công';
        state.userList = state.userList.filter((u) => u.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { clearAdminMessages } = adminSlice.actions;
export default adminSlice.reducer;
