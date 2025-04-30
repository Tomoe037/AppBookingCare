import { createSlice } from '@reduxjs/toolkit';
import { fetchAllcodeByType } from './adminThunk.js';



const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    gender: [],
    role: [],
    position: [],
    loading: false,
    error: null,
  },
  reducers: {
    // sau này thêm logic addUser, updateUser...
  },
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default adminSlice.reducer;
