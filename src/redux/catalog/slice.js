import { createSlice } from '@reduxjs/toolkit';
import { featchAdver, featchAllAdver } from './operation';

const initialState = {
  advert: [],
  allAdvert: [],
  favorites: [],
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
    changeFavorite(state, action) {
      const isFavorite = state.favorites.filter(
        advert => advert._id === action.payload._id
      );
      if (isFavorite.length > 0) {
        state.favorites = state.favorites.filter(
          advert => advert._id !== action.payload._id
        );

        return;
      }
      state.favorites.push({ ...action.payload, favorite: true });
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

export const { changePage, changeFavorite } = catalogSlice.actions;
