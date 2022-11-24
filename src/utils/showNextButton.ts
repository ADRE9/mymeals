// import {ILoginFormValue} from '../screens/LoginScreen/LoginScreen';
// import {IFormValue} from '../screens/RegisterScreen/RegisterScreen';

const showNextButton = (
  index: number,
  errors: any,
  values: any,
  screenName: string,
) => {
  if (screenName === 'Register') {
    if (index === 0 && (errors.name || values.name.length === 0)) {
      return false;
    }
    if (index === 1 && (errors.email || values.email.length === 0)) {
      return false;
    }
    if (
      index === 2 &&
      (errors.phoneNumber || values.phoneNumber.length === 0)
    ) {
      return false;
    }
    if (index === 3 && (errors.password || values.password.length === 0)) {
      return false;
    }
    if (
      index === 4 &&
      (errors.confirmPassword || values.confirmPassword.length === 0)
    ) {
      return false;
    }
    return true;
  }
  if (screenName === 'Login') {
    if (index === 0 && (errors.email || values.email.length === 0)) {
      return false;
    }
    if (index === 1 && (errors.password || values.password.length === 0)) {
      return false;
    }
    return true;
  }
};

export default showNextButton;
