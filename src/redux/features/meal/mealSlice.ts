import {createSlice} from '@reduxjs/toolkit';

import type {ICalendarData} from '../../../types/Calendar';

interface MealInterface {
  meals?: ICalendarData | null;
}

const initialState: MealInterface = {
  meals: null,
};

const mealSlice = createSlice({
  name: 'mealData',
  initialState,
  reducers: {
    addMeal: (state, action) => {
      state.meals = action.payload;
    },
  },
});

export const {addMeal} = mealSlice.actions;
export default mealSlice.reducer;
