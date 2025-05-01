import { createSlice } from '@reduxjs/toolkit';
import { fetchAllcodeByType, createNewUser } from './adminThunk.js';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    gender: [],
    role: [],
    position: [],
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
        if (type === 'GENDER') state.gender = data;
        if (type === 'ROLE') state.role = data;
        if (type === 'POSITION') state.position = data;
      })
      .addCase(fetchAllcodeByType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Lỗi khi tải dữ liệu allcode';
      })

      // Create user
      .addCase(createNewUser.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.error = null;
      })
      .addCase(createNewUser.fulfilled, (state) => {
        state.loading = false;
        state.successMessage = 'Tạo người dùng thành công!';
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearAdminMessages } = adminSlice.actions;
export default adminSlice.reducer;

