import React from 'react';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload}
    default:
      return state;
  }
}


const signup = (dispatch) => {
  return async({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      console.log(response.data);
    } catch (err) {
     dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
  }
}

const signin = (dispatch) => {
  return ({ email, password }) => {
    // make a request to sign up
  }
}
const signout = (dispatch) => {
  return () => {
    // make a request to sign up
  }
}


export const { Provider, Context } = createDataContext(
  authReducer,
  {signin, signup, signout},
  { isSignedIn: false, errorMessage: '' }
)