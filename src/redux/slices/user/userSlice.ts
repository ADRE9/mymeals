import {createSlice} from '@reduxjs/toolkit';

//types
import {IUser} from '../../../types/types';

const initialState: IUser = {
  name: null,
  email: null,
  password: null,
  mealProvider: null,
  phoneNumber: null,
  isEmailVerified: null,
  userExists: null,
  isPhNumVerified: null,
  isLoggedIn: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.password = action.payload.password;
      state.userExists = true;
    },
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state = action.payload;
    },
    logoutUser: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const {registerUser, loginUser, logoutUser} = userSlice.actions;
export default userSlice.reducer;
