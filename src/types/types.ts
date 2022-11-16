export interface IReduxStore {}

export interface IUser {
  name: string | null;
  email: string | null;
  password: string | null;
  mealProvider: string | null;
  phoneNumber: string | null;
  userExists: boolean | null;
  isEmailVerified: boolean | null;
  isPhNumVerified: boolean | null;
  isLoggedIn: boolean | null;
}

export interface ITheme {
  id: string;
  name: string;
  paletteColor: string;
}
