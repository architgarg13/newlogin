import React, {Component} from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import "../App.css";
import {Link, Router}  from "react-router-dom";



class SignInForm extends Component{
  constructor(props){
    super(props)
    let loggedIn = false
    this.state = {
      student_no: "",
      password:"",
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }
  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios
    .post('https://ionic-server-app.herokuapp.com/trainee/login',this.state)
    .then(response => {
      console.log(response)
      if ( response.data.Login = 'true')
      {
        localStorage.setItem("token",response.data.token)
        this.setState({
          loggedIn: true
        })
      }
    })
    .catch(error =>{
      alert("please check username and password")
      console.log(error)
    })



  }




render(){
  if(this.state.loggedIn){
    return <Redirect to = "/Check" />
  }
  const{student_no , password} = this.state
    return(
     
        <div className="FormCenter">
  <form className="FormFields" onSubmit={this.submitHandler}>
      
  
      <div className="FormField">
      <label className="FormField__Label" htmlFor="student_no">Student Number</label>
      <input type="number" id="student_no" onChange={this.changeHandler} className="FormField__Input" placeholder="Enter valid student no" name="student_no" />    </div>
      <div className="FormField">
      <label className="FormField__Label" htmlFor="Password">Password</label>
      <input type="password" onChange={this.changeHandler}  id="password" className="FormField__Input" placeholder="Enter your full password" name="password" />    </div>
  

  <div className="FormField">
  <button   className="formField__Button mr-20" type="submit">Login</button><Link to ="/"
    className="FormField__Link">Create account</Link>
  </div>
  
  </form>
</div>

    );
}
}

export default SignInForm;