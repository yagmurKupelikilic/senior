import React, { Component } from "react";

import zeo from '../zeo.png';
import "./register.css"
import Navbar from '../layout/Navbar';
import {Redirect} from 'react-router-dom'
import {Link} from "react-router-dom";


export default class Register extends Component {
    
  constructor(props) {
    super(props);
    let registered=false;
    this.state = {
      email: "",
      password: "",
      registered
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
   if(email === "yagmur.kupelikilic@icerik.com" && password === "123"){
     localStorage.setItem("token", "kedfjhdlkjvfdkjhg")
     this.setState({
       registered: true
     })
   }
  }


  render() {
    if(this.state.registered){
      return <Redirect to="/login" />
    }
    return (
      <div id="login">
      <Navbar title ="ZeoDemander"/>
      <div className= "col-md-8">
       <div className="zeo">
         <img src={zeo} alt="zeo"/>
        </div>
      <div className="card">
      <div className="card-body">   
                          <form onSubmit = {this.submitForm}>
                          <div className="form-group">
                       
                              </div>
                              <div className="form-group">
                              <label htmlform="email">Email</label>
                              <input 
                                  type="email"
                                  name="email"
                                  id = "emailId"
                                  value={this.state.email}
                                  placeholder =" Insert a valid email "
                                  className= "form-control"
                                  onChange = {this.onChange}
          
                              />
                              </div>
                              <div className="form-group">
                              <label htmlform="password">Password</label>
                              <input 
                                 type="password"
                                 name="password"
                                  id = "passId"
                                  placeholder =" Choose a password "
                                  className= "form-control"
                                  onChange = {this.onChange}
          
                              />
                              </div>
          
                              <button className="btn btn-dark btn-block" type ="submit">Register</button>
                              <Link to="/login" className="link">Have you already registered ?</Link>

                          </form>
                      </div>
                         
                      </div>
                      </div>
                      </div>

                    
                      
    );
  }
}
