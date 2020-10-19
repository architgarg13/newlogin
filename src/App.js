import React from 'react';
import { HashRouter as Router , Route , Link , NavLink} from "react-router-dom";
import Check from './Hello/Check';
import Base from './Hello/Base';
import './App.css';


function App(){
  return(
    <Router basename="./react-auth-ui/" >
      <Route exact  path='/' component={Base}></Route>
      <Route  path='/sign-in' component={Base}></Route>
      <Route  path='/Check' component={Check}></Route>

    </Router>

  );
}

export default App;
