import React, { Component } from 'react'
import {Link} from "react-router-dom";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import "./myaccount.css";


// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

var uniqid = require('uniqid')

 export class Myaccount extends Component {
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
  
    addAnnouncement = (e) => {
      e.preventDefault(); //to prevent refreshing of the page
      const { name, office, orderType, amount, linkTo, status, price } = this.state;
  
      const newAnnouncement = {
        id: uniqid(),
        name: name,
        office: office,
        orderType:orderType,
        amount:amount,
        linkTo:linkTo,
        status:status,
        price:price
      }
      console.log(newAnnouncement);
  
  
      localStorage.setItem("token", "addannouncement")
       this.setState({
         loggedIn: true
       })
      
      // if (!this.validateForm()) {
      //   this.setState({
      //     error: true
      //   })
      //   return;
      // }
  
  
       //{ type: "ADD_ORDER", payload: newAnnouncement }
  
  
  
       //Redirect
       this.props.history.push("/order");
  
    }
  render() {
    if(this.state.loggedIn){
     
    }
    const { name, office, orderType, amount, linkTo, status, price } = this.state;
     
    return (
 
<div>
<div id="nav1">
        
       
        <nav className ="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
      <a href="/login" className="navbar-brand">{"Welcome to BilSports Panel"}</a>
<p className="pool">Pool Temperature : 24 °C </p>
<p className="pool">Sport Center Temperature : 22 °C </p>
<p className="occupancy">Sports Center Occupancy : 50% </p>

 </nav>

</div>

      <section class="app" className="menus">
      <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
  <aside class="sidebar">
         <header>
       <img src="https://w3.bilkent.edu.tr/logo/ing-amblem.png" width="40%" height="40%"></img>
        <p className="bilsportheader"align="center">BilSports <br></br>User Panel</p>
        <br></br><br></br>
      </header>
    <nav class="sidebar-nav">
 
      <ul>
        <li>
          <a href="#"><i class="ion-bag"></i><span>Home</span></a>
          <ul class="nav-flyout">
            <li>
              <a href="#"><i class="ion-ios-clock-outline"></i> Courses</a>
            </li>
            <li>
              
              <a href="#"><i class="ion-ios-clock-outline"></i>Registrations</a>
            </li>
            <li>
              <a href="#"><i class="ion-android-star-outline"></i>Announcements</a>
            </li>
            <li>
              <a href="#"><i class="ion-heart-broken"></i>Account</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#"><i class="ion-ios-settings"></i> <span class="">Facilities</span></a>
          <ul class="nav-flyout">
            <li>
              <a href="#"><i class="ion-ios-alarm-outline"></i>Pool</a>
            </li>
            <li>
              <a href="#"><i class="ion-ios-camera-outline"></i>Gym</a>
            </li>
            <li>
              <a href="#"><i class="ion-ios-chatboxes-outline"></i>Squash</a>
            </li>
            <li>
              <a href="#"><i class="ion-ios-cog-outline"></i>Football</a>
            </li>
          </ul>
        </li>
      
        <li>
          <a href="#"><i class="ion-ios-analytics-outline"></i> <span class="">Statistics</span></a>
        
        </li>
        <li>
          <a href="#"><i class="ion-ios-analytics-outline"></i> <span class="">Gallery</span></a>
        
        </li>
        <li>
          <a href="#"><i class="ion-ios-analytics-outline"></i> <span class="">Contact</span></a>
        
        </li>
       
        <li>
        
        </li>
      </ul>
    </nav>
  </aside>
</section>


    
      </div>
    );
  }
}export default Myaccount;
