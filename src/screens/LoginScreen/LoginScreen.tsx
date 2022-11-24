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
// import Lottie from 'lottie-react-native';
// import Animated, {FlipInXUp, FlipOutXDown} from 'react-native-reanimated';

import {
  perfectFontSize,
  perfectHeight,
  perfectWidth,
} from '../../utils/perfectSize';
import Screen from '../../components/Screen';
import NeuBrutalForm from '../../components/NeuBrutalForm';
import {RightArrow} from 'svg';
import {windowWidth} from '../../utils/dimensions';
import loginSchema from '../../utils/loginSchema';
import {loginUser} from '../../redux/slices/user/userSlice';
import showNextButton from '../../utils/showNextButton';

interface IField {
  id: string;
  field: string;
  value: string;
}
export interface ILoginFormValue {
  email: string;
  password: string;
}

const fieldNames: IField[] = [
  {id: '1', field: 'Email', value: 'email'},
  {id: '2', field: 'Password', value: 'password'},
];

const LoginScreen = ({navigation}) => {
  const aref = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);

  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
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

  const submitValues = (values: ILoginFormValue) => {
    dispatch(loginUser(values));
  };

  return (
    <Screen backgroundColor="#FFF">
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
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
              scrollEnabled={false}
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
                  <Text style={styles.back}>New user ?</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.login}>REGISTER</Text>
                  </TouchableOpacity>
                </View>
              )}
              {index > 0 && (
                <TouchableOpacity onPress={() => onPressBackHandler()}>
                  <Text style={styles.back}>BACK</Text>
                </TouchableOpacity>
              )}
              {showNextButton(index, errors, values, 'Login') &&
                touched &&
                index < 1 && (
                  <TouchableOpacity
                    onPress={() => onPressNextHandler()}
                    style={styles.buttonContainer}>
                    <RightArrow
                      height={perfectHeight(60)}
                      style={styles.nextButton}
                    />
                  </TouchableOpacity>
                )}
              {showNextButton(index, errors, values, 'Login') &&
                touched &&
                index === 1 && (
                  <TouchableOpacity disabled={!isValid} onPress={handleSubmit}>
                    <Text style={styles.login}>LOGIN</Text>
                  </TouchableOpacity>
                )}
            </View>
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'FranklinGothicDemi',
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
    fontFamily: 'FranklinGothicDemi',
    color: 'blue',
    fontWeight: '100',
  },
  back: {
    fontSize: perfectFontSize(18),
    fontFamily: 'FranklinGothicDemi',
    fontWeight: '100',
    color: 'black',
  },
  lottie: {
    width: 100,
    height: 100,
  },
  lottieWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
