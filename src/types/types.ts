export interface IReduxStore {

}

export interface IUser {
  username: string | null;
  email: string | null;
  password: string | null;
  mealProvider: string | null;
  phoneNumber: string | null;
  isEmailVerified: boolean | null;
  isPhNumVerified: boolean | null;
  isLoggedIn: boolean | null;
}
