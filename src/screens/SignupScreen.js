import React, { useContext} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext)
 
  return (
    <View style={styles.container}>
      <AuthForm 
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />

      {/* <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead"
      /> */}
     
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Spacer>
          <Text style={styles.link}>Already have an account? Sign in instead</Text>
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

export default SignupScreen;