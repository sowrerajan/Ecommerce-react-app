import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Component_homePage from './pages/Component_homepage';
import Shopcomponent from './pages/Shopcomponent';


function App() {
  return (
    <div className='app'>
      <Switch>
        <Route
          exact
          path='/'
          component={Component_homePage} />
        <Route
          path='/shop'
          component={Shopcomponent} />
      </Switch>
   </div>
 )
}

export default App;
