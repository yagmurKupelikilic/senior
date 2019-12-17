import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Myaccount extends Component {
  render() {
    return (
      <div>
        <nav className ="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
      <a href="/login" className="navbar-brand">{"ZeoDemander"}</a>
 
      <ul className="navbar-nav ml-auto">
 <li className="nav-item active">
 <Link to ="/orders" className="nav-link" >Orders waiting for process</Link>
 </li>
 
 <li className="nav-item active">
   <Link to ="/Myaccount" className="nav-link" >Given orders</Link>
 </li>
 
 </ul>
 </nav>
      </div>
    );
  }
}
