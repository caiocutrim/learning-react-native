import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import LoginForm from './src/components/LoginForm';
import firebase from 'firebase';
import reducers from './src/reducers';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDOKquFBM5iQoEkrdhSIZXYRGWl5vc4RVw",
      authDomain: "manager-app-soeven.firebaseapp.com",
      databaseURL: "https://manager-app-soeven.firebaseio.com",
      projectId: "manager-app-soeven",
      storageBucket: "manager-app-soeven.appspot.com",
      messagingSenderId: "954381743803"
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm /> 
      </Provider>
    );
  }
}
// start the application
export default App;
