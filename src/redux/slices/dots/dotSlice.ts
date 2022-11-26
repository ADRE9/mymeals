import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import {RootState} from '..';
import {IDot} from '../../../types/Calendar';

const DOTS = [
  {
    id: 'Breakfast1',
    type: 'breakfast',
    color: 'red',
  },
  {
    id: 'Lunch1',
    type: 'lunch',
    color: 'green',
  },
  {
    id: 'Dinner1',
    type: 'dinner',
    color: 'blue',
  },
];

const dotsAdapter = createEntityAdapter({
  selectId: (meal: IDot) => meal.id,
  sortComparer: (a: IDot, b: IDot) => a.id.localeCompare(b.id),
});

const initialState = dotsAdapter.setAll(
  dotsAdapter.getInitialState({loading: 'idle'}),
  DOTS,
);

const dotSlice = createSlice({
  name: 'dots',
  initialState,
  reducers: {
    addDot: dotsAdapter.addOne,
    removeDot: dotsAdapter.removeOne,
    updateDot: dotsAdapter.updateOne,
  },
});

export const {addDot, removeDot, updateDot} = dotSlice.actions;
export const dotSelectors = dotsAdapter.getSelectors(
  (state: RootState) => state.dots,
);

export const selectDotsAdapter = (state: RootState) => state.dots;
export default dotSlice.reducer;
