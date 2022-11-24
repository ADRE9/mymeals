import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

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
      if (!state.userExists) {
        Alert.alert('No User Exists , register Yourself first');
      }
      if (state.email !== action.payload.email) {
        Alert.alert('Invalid Email or Password');
        return;
      }
      if (state.password !== action.payload.password) {
        Alert.alert('Invalid Email or Password');
        return;
      }
      state.isLoggedIn = true;
      state = action.payload;
    },
    logoutUser: state => {
      state.isLoggedIn = false;
    },
  },
});

export const {registerUser, loginUser, logoutUser} = userSlice.actions;
export default userSlice.reducer;
