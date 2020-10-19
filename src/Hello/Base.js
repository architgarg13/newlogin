import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Link , NavLink} from "react-router-dom";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import '../App.css';


class Mainpage extends Component {
  render(){
  return (

    
    <Router basename='/react-auth-ui'>
  <div className="App">
    <div className="App__Aside">
      <h1>Welcome</h1>
     <div className="para"> Enter Your Personal Details and start journey with us.</div>
    </div>
    <div className="App__form">
      <div className="PageSwitcher">
        <NavLink  to ="/sign-in" activeclassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
        <NavLink exact to ="/" className="PageSwitcher__Item"activeclassName=" PageSwitcher__Item--Active">Sign Up</NavLink>
      </div>


      <div className="FormTitle">
        <NavLink to="/sign-in" activeclassName="formTitle__Link--Active" className="FormTitle__Link">Sign in</NavLink> or 
        <NavLink exact to="/" className="formTitle__Link--Active" activeclassName="formTitle__Link--Active" >Sign Up</NavLink>
      </div>
      
      <Route exact path="/" component={SignUpForm} >
       </Route>
      <Route path="/sign-in" component={SignInForm} ></Route>
      

    </div>
  </div>
  </Router>
      
  );
}
}
export default Mainpage;
