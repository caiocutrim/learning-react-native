import React, {Component} from 'react';
import {View} from 'react-native';
import {Header, Button, Spinner, CardSection} from './src/components/common';
import firebase from 'firebase';
import LoginForm from "./src/components/LoginForm";

class App extends Component {
  state = {loggedIn: null};

  componentWillMount() {
    // init firebase
    firebase.initializeApp({
      apiKey: "AIzaSyBdGQDyrAmcLUKlk6jjj6z6uqMav91p39Y",
      authDomain: "auth-5ed42.firebaseapp.com",
      databaseURL: "https://auth-5ed42.firebaseio.com",
      projectId: "auth-5ed42",
      storageBucket: "auth-5ed42.appspot.com",
      messagingSenderId: "39165994719"
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={()=> firebase.auth().signOut()}>
              Log out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size={"large"}/>;
    }

  }

  render() {
    return (
      <View>
        <Header headerText={"Authentication"} />
          {this.renderContent()}
      </View>
    )
  }
}

export default App;
