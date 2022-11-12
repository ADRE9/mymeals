import {combineReducers} from '@reduxjs/toolkit';

import userSlice from './user/userSlice';
import mealSlice from './meal/mealSlice';
import dotSlice from './dots/dotSlice';

export const rootReducer = combineReducers({
  user: userSlice,
  meals: mealSlice,
  dots: dotSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
