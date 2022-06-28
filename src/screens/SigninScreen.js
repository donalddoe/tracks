import React, { useContext, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext)
 
  return (
    <View style={styles.container}>
      <AuthForm 
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />

      {/* <NavLink
        routeName="Signup"
        text="Already have an account? Sign in instead"
      /> */}
     
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Spacer>
          <Text style={styles.link}>Don't have an account? Sign up</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // marginBottom: 150
  },
  link: {
    color: '#339af0'
  }
});

export default SigninScreen;