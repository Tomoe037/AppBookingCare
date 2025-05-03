import { createSlice } from '@reduxjs/toolkit';
import { fetchTopDoctors } from './userThunk';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    topDoctors: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.topDoctors = action.payload;
      })
      .addCase(fetchTopDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;