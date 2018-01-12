import {Actions} from 'react-native-router-flux';
import {
  EMAIL_CHANGED, 
  PASSWORD_CHANGED, 
  LOGIN_USER_FAIL, 
  LOGIN_USER_SUCCESS,
  LOGIN_USER
} from './types';
import firebase from 'firebase';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({email, password}) => {
  return dispatch => {
    dispatch({type: LOGIN_USER});
    firebase.auth().signInWithEmailAndPassword(email.trim(), password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => {
        firebase.auth().createUserWithEmailAndPassword(email.trim(), password)
          .then(user => { loginUserSuccess(dispatch, user)})
          .catch(()=> { loginUserFail(dispatch) });
      });
  };
}

const loginUserFail = dispatch => dispatch({type: LOGIN_USER_FAIL});

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
}