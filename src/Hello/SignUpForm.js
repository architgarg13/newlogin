
import React, {Component} from "react";
import axios from 'axios';
import '../App.css';
import  { Link, Route, Router} from "react-router-dom";

class SignUpForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      student_no: '',
      branch: '',
      mobile_no: '',
      email:'',
      password: '',
    }
  }

  
  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }
  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios
    .post('https://ionic-server-app.herokuapp.com/trainee/register',this.state)
    .then(response => {
      console.log(response)
      alert("You are now registered . Please login")
     
    })
    .catch(error =>{
      alert("Error")
      console.log(error)
    })



  }





render(){
  const { name, student_no , branch, mobile_no , email , password}= this.state
    return(
        <div className="FormCenter">
  <form className="FormFields" onSubmit={this.submitHandler}>
    <div className="FormField">
      <label className="FormField__Label" htmlFor="name">Full Name</label>
      <input  onChange={this.changeHandler} type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name={"name"} />    </div>

      <div className="FormField">
      <label className="FormField__Label" htmlFor="student_no">Student Number</label>
      <input onChange={this.changeHandler} type="number" id="student_no" className="FormField__Input" placeholder="Enter your student number" name={"student_no"} />    </div>
  
  
      <div className="FormField">
      <label className="FormField__Label" htmlFor="branch">Branch</label>
      <input  onChange={this.changeHandler} type="text" id="branch" className="FormField__Input" placeholder="Enter your full email-ID" name={"branch"} />    </div>
  
      <div className="FormField">
      <label className="FormField__Label" htmlFor="mobile_no">Mobile Number</label>
      <input onChange={this.changeHandler} type="number" id="mobile_no" className="FormField__Input" placeholder="Enter your mobile number" name={"mobile_no"} />    </div>
  
      <div className="FormField">
      <label className="FormField__Label" htmlFor="email">Email ID</label>
      <input onChange={this.changeHandler} type="email" id="email" className="FormField__Input" placeholder="Enter your email " name={"email"} />    </div>

      <div className="FormField">
      <label className="FormField__Label" htmlFor="password">password</label>
      <input onChange={this.changeHandler} type="password" id="password" className="FormField__Input" placeholder="Enter your password" name={"password"} />    </div>

  <div className="FormField">
    <button type="submit" className="formField__Button mr-20">Sign Up</button><Link to="/sign-in"
    className="FormField__Link">I'm already member</Link>
  </div>
  
  </form>
</div>

    );
}
}

export default SignUpForm;