import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65fa05f53909a9a65b19c9bf.mockapi.io';

export const featchAdver = createAsyncThunk(
  'catalog/featchAdvert',
  async (_, thunkApi) => {
    const { catalog } = thunkApi.getState();
    try {
      const params = {
        page: catalog.page,
        limit: 4,
      };
      const res = await axios.get(`/advert`, { params });
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const featchAllAdver = createAsyncThunk(
  'catalog/featchAllAdvert',
  async (_, thunkApi) => {
    try {
      const res = await axios.get(`/advert`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
