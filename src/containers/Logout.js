import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Navbar from '../layout/Navbar';
import adam from '../adam.gif';


export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
  render() {
    return (
        
      <div>
        <Navbar title={"ZeoDemander"}/>
        <div className="adam">
         <img src={adam} alt="adam"/>
        </div>

        <h1>You have been logout!</h1>
        <p>Please click if you want to login again</p>
        <Link to ="/login">Login Again</Link>
      </div>
    )
  }
}
