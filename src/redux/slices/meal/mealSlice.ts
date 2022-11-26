import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import {RootState} from '..';

import type {ICalendarDate} from '../../../types/Calendar';
import getMeals from '../../../utils/getMeals';
import {selectDotsAdapter} from '../dots/dotSlice';

const MEALTYPES = ['Breakfast', 'Lunch', 'Dinner'];

const mealsAdapter = createEntityAdapter({
  selectId: (meal: ICalendarDate) => meal.id,
  sortComparer: (a: ICalendarDate, b: ICalendarDate) =>
    a.id.localeCompare(b.id),
});

const mealSlice = createSlice({
  name: 'meals',
  initialState: mealsAdapter.getInitialState({
    loading: 'idle',
    mealTypes: MEALTYPES,
  }),
  reducers: {
    mealAdded: mealsAdapter.addOne,
    mealAddedOnSameDay: mealsAdapter.upsertOne,
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

export const {
  mealAdded,
  mealDeleted,
  mealAddedOnSameDay,
  mealLoaded,
  mealLoading,
  mealUpdated,
} = mealSlice.actions;

export const {
  selectAll: selectAllMeals,
  selectById: selectMealsById,
  selectEntities: selectMealsEntities,
  selectIds: selectMealsIds,
  selectTotal: selectTotalMeals,
} = mealsAdapter.getSelectors();

const selectMealsAdapter = (state: RootState) => state.meals;

export const allMealsSelector = createSelector(
  [selectMealsAdapter, selectDotsAdapter],
  getMeals,
);

export default mealSlice.reducer;
