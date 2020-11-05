import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Component_homePage from './pages/Component_homepage';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
function App() {
  return (
    <div className='app'>
      <Switch>
        <Route
          exact
          path='/'
          component={Component_homePage} />
        <Route
          path='/hats'
          component={HatsPage} />
      </Switch>
   </div>
 )
}

export default App;
