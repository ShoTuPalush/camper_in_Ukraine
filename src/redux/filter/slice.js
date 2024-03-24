import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    location: '',
    vehicleEquipment: [],
    vehicleType: '',
    btnClick: false,
  },
  filtersFavorite: {
    location: '',
    vehicleEquipment: [],
    vehicleType: '',
    btnClick: false,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setVehicleEquipment: (state, action) => {
      if (action.payload.page === 'favorite') {
        if (
          state.filtersFavorite.vehicleEquipment.includes(action.payload.data)
        ) {
          state.filtersFavorite.vehicleEquipment =
            state.filtersFavorite.vehicleEquipment.filter(
              item => item !== action.payload.data
            );
          return;
        }
        state.filtersFavorite.vehicleEquipment.push(action.payload.data);
        return;
      }
      if (state.filters.vehicleEquipment.includes(action.payload.data)) {
        state.filters.vehicleEquipment = state.filters.vehicleEquipment.filter(
          item => item !== action.payload.data
        );
        return;
      }
      state.filters.vehicleEquipment.push(action.payload.data);
    },
    setFilters: (state, action) => {
      if (action.payload.page === 'favorite') {
        state.filtersFavorite = {
          ...state.filtersFavorite,
          ...action.payload.data,
        };
        return;
      }
      state.filters = {
        ...state.filters,
        ...action.payload.data,
      };
    },
    setBtnClick: (state, action) => {
      if (action.payload.page === 'favorite') {
        state.filtersFavorite.btnClick = true;
        return;
      }
      state.filters.btnClick = true;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { setFilters, setBtnClick, setVehicleEquipment } =
  filterSlice.actions;
