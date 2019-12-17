import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom";
import "./account.css"

var uniqid = require('uniqid')


class Account extends Component {
  constructor(props) {
    super(props)
    const token = localStorage.getItem("token")
    let loggedIn = false
    this.state = {
      name: "",
      office: "",
      orderType: "",
      amount: 0,
      linkTo: "",
      status: "",
      price: "",
      error: false,
      loggedIn
    }

    if(token == null){
      loggedIn = false
    }

  }


  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addOrder = (e) => {
    e.preventDefault(); //to prevent refreshing of the page
    const { name, office, orderType, amount, linkTo, status, price } = this.state;

    const newOrder = {
      id: uniqid(),
      name: name,
      office: office,
      orderType:orderType,
      amount:amount,
      linkTo:linkTo,
      status:status,
      price:price
    }
    console.log(newOrder);


    localStorage.setItem("token", "kedfjhdlkjvfdkjhg")
     this.setState({
       loggedIn: true
     })
    
    // if (!this.validateForm()) {
    //   this.setState({
    //     error: true
    //   })
    //   return;
    // }


     //{ type: "ADD_ORDER", payload: newOrder }



     //Redirect
     this.props.history.push("/order");

  }
  
  render() {
    if(this.state.loggedIn){
      return <Redirect to="/user" />
    }
    const { name, office, orderType, amount, linkTo, status, price } = this.state;

    return (
    
        
          <div id="accountNavbar">
            <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
              <a href="/login" className="navbar-brand">{"BilSports"}</a>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/user" className="nav-link" >Orders</Link>
                </li>


                <li className="nav-item active">
                  <Link to="/logout" className="nav-link" >Logout</Link>
                </li>

              </ul>
            </nav>


            <div className="announcementForm">

              <div className="card">
                <div className="card-header">
                  <h4>ANNOUNCEMENT</h4>
                </div>
                <div className="card-body">
                  {
                    // error ?
                    // <div className ="alert alert-danger">
                    //   Lütfen bilgilerinizi kontrol ediniz.
                    // </div>
                    // :null
                  }
                  <form onSubmit={this.addOrder}>

                    <div className="form-group">
                      <label htmlform="name">Announcement Name:</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value = {name}
                        placeholder="Enter Username" 
                        className="form-control"
                        onChange = {this.changeInput}
                        />
                    </div>

                    <div className="form-group">
                      <label htmlform="office">Office</label>
                      <input
                        type="text"
                        name="office"
                        id="office"
                        value = {office}
                        placeholder="Enter which office is"
                        className="form-control"
                        onChange = {this.changeInput}

                         />

                    </div>

                    <div className="form-group">
                      <label htmlform="orderType">Order type</label>
                      <input
                        type="text"
                        name="orderType"
                        id="orderType"
                        value = {orderType}
                        placeholder="E.g chair"
                        className="form-control"
                        onChange = {this.changeInput}

                         />

                    </div>

                    <div className="form-group">
                      <label htmlform="amount">Amount</label>
                      <input
                        type="number"
                        name="amount"
                        id="amount"
                        value = {amount}
                        placeholder="Enter how many" 
                        className="form-control"
                        onChange = {this.changeInput}

                        />

                    </div>

                    <div className="form-group">
                      <label htmlform="linkTo">Link to</label>
                      <input
                        type="link"
                        name="linkTo"
                        id="linkTo"
                        value = {linkTo}
                        placeholder="Enter the link" 
                        className="form-control"
                        onChange = {this.changeInput}

                        />

                    </div>

                    <div className="form-group">
                      <label htmlform="status">Status</label>
                      <input
                        type="text"
                        name="status"
                        id="status"
                        value = {status}
                        placeholder="Enter the status of order"
                        className="form-control"
                        onChange = {this.changeInput}

                         />

                    </div>

                    <div className="form-group">
                      <label htmlform="price">Price</label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        value = {price}
                        placeholder="Enter the estimated price"
                        className="form-control"
                        onChange = {this.changeInput}


                         />

                    </div>

                      <button className="btn btn-danger" type="submit">Give Order</button>

                  </form>
                </div>
              </div>
            </div>
          </div>

      )
      
      
  }


} export default Account;