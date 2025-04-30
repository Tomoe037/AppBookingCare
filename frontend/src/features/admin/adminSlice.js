// import { createSlice } from '@reduxjs/toolkit';
// import { fetchAdminList, addAdmin, deleteAdmin } from './adminThunk';

// const initialState = {
//   adminList: [],
//   loading: false,
//   error: null,
// };

// const adminSlice = createSlice({
//   name: 'admin',
//   initialState,
//   reducers: {
//     clearAdminList(state) {
//       state.adminList = [];
//     },
//   },
//   extraReducers: (builder) => {
//     // fetchAdminList
//     builder
//       .addCase(fetchAdminList.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchAdminList.fulfilled, (state, action) => {
//         state.adminList = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchAdminList.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || 'Lỗi khi lấy danh sách admin';
//       })

//     // addAdmin
//       .addCase(addAdmin.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(addAdmin.fulfilled, (state, action) => {
//         state.adminList.push(action.payload);
//         state.loading = false;
//       })
//       .addCase(addAdmin.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || 'Lỗi khi thêm admin';
//       })

//     // deleteAdmin
//       .addCase(deleteAdmin.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(deleteAdmin.fulfilled, (state, action) => {
//         state.adminList = state.adminList.filter(
//           (admin) => admin.id !== action.payload
//         );
//         state.loading = false;
//       })
//       .addCase(deleteAdmin.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || 'Lỗi khi xóa admin';
//       });
//   },
// });

// export const { clearAdminList } = adminSlice.actions;
// export default adminSlice.reducer;
