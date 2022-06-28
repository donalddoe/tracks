import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'login': 
      return { errorMessage: '', token: action.payload }
    case 'clear_error_message':
      return { ...state, errorMessage: '' }
    case 'signout': 
      return { token: null , errorMessage: ''}
    default:
      return state;
  }
}

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'login', payload: token })
    navigate('mainFlow');
  } else {
    navigate('loginFlow');
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

const signup = dispatch => async({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'login', payload: response.data.token })

      // navigate to main flow
      navigate('mainFlow');
    } catch (err) {
     dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
  }
const signin = dispatch => async({ email, password }) => {
    try {
      const response = await trackerApi.post('/login', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'login', payload: response.data.token })

      // navigate to main flow
      navigate('mainFlow');
    } catch (err) {
     dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
  }


const signout = dispatch => async() => {
    // make a request to sign up
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' })
  navigate('loginFlow');
  
  }



export const { Provider, Context } = createDataContext(
  authReducer,
  {signin, signup, signout, clearErrorMessage, tryLocalSignin},
  { token: null, errorMessage: '' }
)