import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import {myDarkTheme} from '../../../themes/myTheme';
import {IDot} from '../../../types/Calendar';

const DOTS = [
  {
    id: 'Breakfast',
    color: `${myDarkTheme['color-success-400']}`,
    selectedDotColor: myDarkTheme['color-success-900'],
  },
  {
    id: 'Lunch',
    color: myDarkTheme['color-info-400'],
    selectedDotColor: myDarkTheme['color-info-900'],
  },
  {
    id: 'Dinner',
    color: myDarkTheme['color-success-400'],
    selectedDotColor: myDarkTheme['color-success-900'],
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
export default dotSlice.reducer;
