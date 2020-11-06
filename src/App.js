import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Component_homePage from './pages/Component_homepage';
import Shopcomponent from './pages/Shopcomponent';
import HeaderComponent from './Components/HeaderComponent';
import SignIn from './pages/SignIn';
import { auth } from './Firebase/firebase.utils';


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderComponent currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Component_homePage} />
          <Route path='/shop' component={Shopcomponent} />
          <Route path='/signin' component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
