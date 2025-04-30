import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllcodeByType } from './adminService.js';

 const fetchAllcodeByType = createAsyncThunk(
  'admin/fetchAllcodeByType',
  async (type) => {
    const data = await getAllcodeByType(type);
    return { type, data };
  }
);

export {
    fetchAllcodeByType,
}