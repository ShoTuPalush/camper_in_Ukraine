import { createSlice } from '@reduxjs/toolkit';
import { featchAdver, featchAllAdver } from './operation';

const initialState = {
  advert: [],
  allAdvert: [],
  isLoading: false,
  error: null,
  page: 1,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    changePage(state, action) {
      state.page += action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(featchAdver.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(featchAdver.fulfilled, (state, action) => {
        state.advert.push(...action.payload);
        state.isLoading = false;
      })
      .addCase(featchAllAdver.fulfilled, (state, action) => {
        state.allAdvert = action.payload;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;

export const { changePage } = catalogSlice.actions;
