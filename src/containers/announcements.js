import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom";
import "./account.css"
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
var uniqid = require('uniqid')


class announcements extends Component {
  constructor(props) {
    super(props)
    const token = localStorage.getItem("token")
    let loggedIn = false
    this.state = {
      name: "",
      announcementDate: "",
      content: "",
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
    const { name, office, announcementDate, amount, linkTo, content, price } = this.state;

    const newAnnouncement = {
      id: uniqid(),
      name: name,
      announcementDate:announcementDate,
      content:content,
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
      //return <Redirect to="/user" />
    }
    const { name, office, announcementDate, amount, linkTo, content, price } = this.state;

    return (
    
        
          <div id="accountNavbar">
         <div id="nav1">
        
       
        <nav className ="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-8">
      <a href="#" className="navbar-brand">{"Welcome to BilSports Panel"}</a>
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
              <a href="/announcement"><i class="ion-android-star-outline"></i>Announcements</a>
            </li>
            <li>
              <a href="myaccount"><i class="ion-heart-broken"></i>Account</a>
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
 <div className="announcementForm">

<div className="card">
  <div className="card-header">
    <h4>Make Announcement</h4>
  </div>
  <div className="card-body">
    {
      // error ?
      // <div className ="alert alert-danger">
      //   Lütfen bilgilerinizi kontrol ediniz.
      // </div>
      // :null
    }
    <form onSubmit={this.addAnnouncement}>

      <div className="form-group">
        <label htmlform="name">Announcement Subject:</label>
        <input
          type="text"
          name="name"
          id="name"
          value = {name}
          placeholder="Enter Subject" 
          className="form-control"
          onChange = {this.changeInput}
          />
      </div>

     

      <div className="form-group">
        <label htmlform="announcementDate">Announcement Date</label>
        <input
          type="date"
          name="announcementDate"
          id="announcementDate"
          value = {announcementDate} /* burası değişti */
          placeholder="Enter Date"
          className="form-control"
          onChange = {this.changeInput}

           />

      </div>

      <div className="form-group">
        <label htmlform="content">Announcement Content</label>
        <textarea
        type="multiline"
          name="content"
          id="content"
          wrap="hard"
          value = {content}
          placeholder="Enter the content"
          className="form-control"
          onChange = {this.changeInput}

           />

      </div>

     

        <button className="btn btn-danger" type="submit">Submit Announcement</button>

    </form>
  </div>
</div>
</div>
          </div>

      );
      
      
  }


} export default announcements;