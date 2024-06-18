import React, {useEffect} from 'react';
import {Button, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Formik, FormikProps} from 'formik';
import * as yup from 'yup';
import createStyle from './styles';
import {colors} from 'theme/Color';
import StyledText from 'components/StyledText';
import {useAppTheme} from 'theme/AppThemeProvider';
import {AuthValues} from 'redux/api/auth/type';
import {useAuth} from 'hooks/auth/useAuth';

const Login = () => {
  const theme = useAppTheme();
  const styles = createStyle(theme.colors, theme.spaces);
  const initialValues: AuthValues = {username: '', password: ''};
  const {auth, signInResult, authFailed, authSuccess} = useAuth();
  const {isSuccess, isError, isFetching, error, data, isLoading} = signInResult;

  const loginValidationSchema = yup.object().shape({
    username: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  useEffect(() => {
    if (isSuccess) {
      authSuccess(data);
    }
    if (isError) {
      authFailed(error);
    }
  }, [isLoading, isFetching]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <StyledText>Login Screen</StyledText>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={values => auth(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }: FormikProps<AuthValues>) => (
            <>
              <TextInput
                placeholder="Email Address"
                style={styles.textInput}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                keyboardType="email-address"
              />
              {errors.username && touched.username && (
                <StyledText style={styles.errorText}>
                  {errors.username}
                </StyledText>
              )}
              <TextInput
                placeholder="Password"
                style={styles.textInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <StyledText
                  style={styles.errorText}
                  textColors={colors.light.errorText}>
                  {errors.password}
                </StyledText>
              )}
              <Button
                onPress={() => handleSubmit()}
                title="Submit"
                disabled={!isValid}
              />
              <StyledText
                style={styles.errorText}
                textColors={colors.light.errorText}>
                123
              </StyledText>
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default Login;
