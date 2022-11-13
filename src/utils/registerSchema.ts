import * as Yup from 'yup';
const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  phoneNumber: Yup.string()
    .min(10, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Phone Number is required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

export default signUpSchema;
