import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Register: any,
  Login: any,
};

export type RegisterScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  // eslint-disable-next-line prettier/prettier
  'Register',
>;

export type AppStackParamList = {
  Home: any,
  Account: any,
};
