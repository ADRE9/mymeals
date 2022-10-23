import {combineReducers} from '@reduxjs/toolkit';

import userSlice from './user/userSlice';
import mealSlice from './meal/mealSlice';

export const rootReducer = combineReducers({
  user: userSlice,
  mealData: mealSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
