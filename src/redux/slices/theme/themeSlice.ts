import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import {myDarkTheme} from '../../../themes/myTheme';
import {IDot} from '../../../types/Calendar';

const THEMES = [
  {
    id: 'classicBlack',
    name: 'Classic Black',
    color: `${myDarkTheme['color-success-400']}`,
    selectedDotColor: myDarkTheme['color-success-900'],
  },
  {
    id: 'emerald',
    name: 'Emerald',
    color: myDarkTheme['color-info-400'],
    selectedDotColor: myDarkTheme['color-info-900'],
  },
  {
    id: 'ocean',
    name: 'Ocean',
    color: myDarkTheme['color-success-400'],
    selectedDotColor: myDarkTheme['color-success-900'],
  },
  {
    id: 'xdaFan',
    name: 'XDA Fan',
    color: myDarkTheme['color-info-400'],
    selectedDotColor: myDarkTheme['color-info-900'],
  },
  {
    id: 'dejaVu',
    name: 'Deja Vu',
    color: myDarkTheme['color-warning-400'],
    selectedDotColor: myDarkTheme['color-warning-900'],
  },
];

const dotsAdapter = createEntityAdapter({
  selectId: (theme: IDot) => theme.id,
  sortComparer: (a: IDot, b: IDot) => a.id.localeCompare(b.id),
});

const initialState = dotsAdapter.setAll(
  dotsAdapter.getInitialState({loading: 'idle'}),
  THEMES,
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
