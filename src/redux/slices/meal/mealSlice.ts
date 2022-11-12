import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';

import type {ICalendarDate} from '../../../types/Calendar';

const mealsAdapter = createEntityAdapter({
  selectId: (meal: ICalendarDate) => meal.id,
  sortComparer: (a: ICalendarDate, b: ICalendarDate) =>
    a.id.localeCompare(b.id),
});

const mealSlice = createSlice({
  name: 'meals',
  initialState: mealsAdapter.getInitialState({
    loading: 'idle',
  }),
  reducers: {
    mealAdded: mealsAdapter.addOne,
    mealUpdated: mealsAdapter.updateOne,
    mealLoading(state, _) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    mealLoaded(state, action) {
      if (state.loading === 'pending') {
        mealsAdapter.setAll(state, action.payload);
        state.loading = 'idle';
      }
    },
    mealDeleted: mealsAdapter.removeOne,
  },
});

export const {mealAdded, mealDeleted, mealLoaded, mealLoading, mealUpdated} =
  mealSlice.actions;
export default mealSlice.reducer;
