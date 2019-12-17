import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class User extends Component {

  constructor(props){
    super(props);
    this.state = {
      isVisible: true
    }
  }
  onClickEvent = (e) => {
    this.setState({
      isVisible : !this.state.isVisible
    })
  }
  
   render() {
    const { username, office, orderType, amount, linkTo, status, price } = this.props;
    const {isVisible} =this.state;

    return (
      <div className="Navbar">
      <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
      <a href="/login" className="navbar-brand">{"ZeoDemander"}</a>
      <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to ="/logout" className="nav-link" >Logout</Link>
       </li>
      </ul>
     </nav> 
    
    
       <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline" onClick = {this.onClickEvent}>{username}</h4>
            <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
          </div>
            {
              isVisible ? <div className="card-body">
              <p className="card-text">Office: {office}</p>
              <p className="card-text">orderType: {orderType}</p>
              <p className="card-text">amount: {amount}</p>
              <p className="card-text">linkTo: {linkTo}</p>
              <p className="card-text">status: {status}</p>
              <p className="card-text">price: {price}</p>
            </div> : null
            }
          

        </div>
      </div>
    </div>

    )
  }
}
