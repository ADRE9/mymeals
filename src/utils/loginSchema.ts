import * as Yup from 'yup';
const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Password is required'),
});

export default loginSchema;
