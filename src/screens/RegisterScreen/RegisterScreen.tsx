import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';

import {
  perfectFontSize,
  perfectHeight,
  perfectWidth,
} from '../../utils/perfectSize';
import Screen from '../../components/Screen';
import NeuBrutalForm from '../../components/NeuBrutalForm';
import {RightArrow} from 'svg';
import {windowWidth} from '../../utils/dimensions';
import signUpSchema from '../../utils/registerSchema';
import {registerUser} from '../../redux/slices/user/userSlice';

interface IField {
  id: string;
  field: string;
  value: string;
}
export interface IFormValue {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const fieldNames: IField[] = [
  {id: '1', field: 'Name', value: 'name'},
  {id: '2', field: 'Email', value: 'email'},
  {id: '3', field: 'Phone Number', value: 'phoneNumber'},
  {id: '4', field: 'Password', value: 'password'},
  {id: '5', field: 'Confirm Password', value: 'confirmPassword'},
];

const RegisterScreen = () => {
  const aref = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);

  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };

  useEffect(() => {
    aref.current?.scrollToIndex({index, animated: true});
  }, [index]);

  const onPressNextHandler = () => {
    if (index >= 4) {
      return;
    }
    setIndex(prev => prev + 1);
  };

  const onPressBackHandler = () => {
    if (index <= 0) {
      return;
    }
    setIndex(prev => prev - 1);
  };

  const showNextButton = (errors: any) => {
    if (index === 0 && errors.name) {
      return false;
    }
    if (index === 1 && errors.email) {
      return false;
    }
    if (index === 2 && errors.phoneNumber) {
      return false;
    }
    if (index === 3 && errors.password) {
      return false;
    }
    if (index === 4 && errors.confirmPassword) {
      return false;
    }
    return true;
  };

  const submitValues = (values: IFormValue) => {
    dispatch(registerUser(values));
  };

  return (
    <Screen backgroundColor="#FFF">
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={values => submitValues(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <FlatList
              initialScrollIndex={index}
              ref={aref}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={fieldNames}
              keyExtractor={item => item.id}
              renderItem={(item: ListRenderItemInfo<IField>) => {
                return (
                  <View style={styles.fieldWrapper}>
                    <Text style={styles.label}>{item.item.field}</Text>
                    <NeuBrutalForm
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      field={item.item.value}
                      values={values}
                      errors={errors}
                      touched={touched}
                    />
                  </View>
                );
              }}
            />
            <View style={styles.bottomBar}>
              {index === 0 && (
                <View>
                  <Text style={styles.back}>Already an user ?</Text>
                  <TouchableOpacity onPress={() => onPressBackHandler()}>
                    <Text style={styles.login}>LOGIN</Text>
                  </TouchableOpacity>
                </View>
              )}
              {index > 0 && (
                <TouchableOpacity onPress={() => onPressBackHandler()}>
                  <Text style={styles.back}>BACK</Text>
                </TouchableOpacity>
              )}
              {showNextButton(errors) && touched && index < 4 && (
                <TouchableOpacity
                  onPress={() => onPressNextHandler()}
                  style={styles.buttonContainer}>
                  <RightArrow
                    height={perfectHeight(60)}
                    style={styles.nextButton}
                  />
                </TouchableOpacity>
              )}
              {index === 4 && (
                <TouchableOpacity disabled={!isValid} onPress={handleSubmit}>
                  <Text style={styles.login}>CONFIRM AND LET ME IN</Text>
                </TouchableOpacity>
              )}
            </View>
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'FranklinGothic',
    color: 'black',
    fontSize: perfectFontSize(20),
    marginVertical: 10,
  },
  buttonContainer: {
    height: perfectHeight(80),
    width: perfectHeight(80),
    justifyContent: 'center',
    alignItems: 'center',
    justifySelf: 'flex-end',
  },
  nextButton: {
    width: '100%',
  },
  fieldWrapper: {
    width: windowWidth,
    height: 100,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: perfectWidth(20),
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: perfectHeight(80),
    paddingHorizontal: perfectWidth(20),
    bottom: perfectHeight(20),
  },
  login: {
    fontSize: perfectFontSize(18),
    fontFamily: 'FranklinGothic',
    color: 'blue',
    fontWeight: '100',
  },
  back: {
    fontSize: perfectFontSize(18),
    fontFamily: 'FranklinGothic',
    fontWeight: '100',
    color: 'black',
  },
});
