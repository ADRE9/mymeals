import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useCallback} from 'react';

type Props = {
  handleChange: any,
  handleBlur: any,
  values: any,
  field: string,
  errors: any,
  touched: any,
};

const NeuBrutalForm = (props: Props) => {
  const decideSecureEntry = useCallback(() => {
    return props.field === 'password' || props.field === 'confirmPassword'
      ? true
      : false;
  }, [props.field]);

  const decideKeyboardType = useCallback(() => {
    return props.field === 'phoneNumber'
      ? 'phone-pad'
      : props.field === 'email'
      ? 'email-address'
      : 'default';
  }, [props.field]);

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={props.handleChange(`${props.field}`)}
          onBlur={props.handleBlur(`${props.field}`)}
          value={props.values[`${props.field}`]}
          style={styles.textInput}
          secureTextEntry={decideSecureEntry()}
          keyboardType={decideKeyboardType()}
        />
      </View>
      {props.errors[`${props.field}`] && props.touched[`${props.field}`] && (
        <Text style={styles.warning}>{props.errors[`${props.field}`]}</Text>
      )}
    </>
  );
};

export default NeuBrutalForm;

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    borderRadius: 5,
    backgroundColor: 'black',
    width: '100%',
    height: 40,
    top: 4,
    left: 3,
    marginBottom: 10,
  },
  textInput: {
    position: 'absolute',
    borderWidth: 2,
    borderRadius: 5,
    zIndex: 2,
    bottom: 4,
    right: 3,
    height: 40,
    width: '100%',
    color: 'black',
    shadowColor: 'black',
    shadowOpacity: 1,
    backgroundColor: 'white',
    fontFamily: 'FranklinGothicMedium',
    paddingHorizontal: 10,
  },
  warning: {
    color: 'red',
  },
});
