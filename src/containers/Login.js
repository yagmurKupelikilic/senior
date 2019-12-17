import React, { Component } from "react";
import "./Login.css";
import seozeo from '../seozeo.png';
import Navbar from '../layout/Navbar';
import {Redirect} from 'react-router-dom'


export default class Login extends Component {
  constructor(props) {
    super(props);
    let loggedIn =false
    this.state = {
      email: '',
      password: '',
      loggedIn
    }
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm(e) {
    e.preventDefault();
   const { email, password} = this.state
   //login
   if(email === "yagmur.kupelikilic@icerik.com"  && password === "123"){
     localStorage.setItem("token", "kedfjhdlkjvfdkjhg")
     this.setState({
       loggedIn: true
     })
   }
  }

 
  render() {
    if(this.state.loggedIn){
      return <Redirect to="/account" />
    }
    return (
      <div id="login">
     <Navbar title ="ZeoDemander"/>

      <div className= "col-md-8">
      <div className="seozeo">
         <img src={seozeo} alt="seo"/>
        </div>
      <div className="card">
      <div className="card-body">
  
                          <form onSubmit = {this.submitForm} className="form">
                          <div className="form-group">
                              <label htmlform="email">Email</label>
                              <input 
                                  type="email"
                                  name="email"
                                  id = "id"
                                  value={this.state.email}
                                  placeholder =" Enter email "
                                  className= "form-control"
                                  onChange = {this.onChange}
          
                              />
                              </div>
          
                              <div className="form-group">
                              <label htmlform="password">Password</label>
                              <input 
                                  type="password"
                                  name="password"
                                  id = "id"
                                  value={this.state.password}
                                  placeholder =" Enter password "
                                  className= "form-control"
                                  onChange = {this.onChange}
          
                              />
                              </div>                    
                              <button className ="btn btn-danger btn-block" type ="submit">Login</button>

                          </form>
                      </div>
                      </div>
                      </div>
                      </div>
    );
  }
}
