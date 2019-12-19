import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Statistic extends Component {
  render() {
    return (
      <div>
        <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
         <a href="/login" className="navbar-brand">{"BilSports"}</a>
         <ul className="navbar-nav ml-auto">
         <li className="nav-item active">
           <Link to ="/logout" className="nav-link" >Logout</Link>
          </li>
         </ul>
      </nav>

      <h1>Statistic PAGE</h1>
        <div className= "col-md-8 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="form">
                <input 
                name="name"
                type="name"
                id="id"
                
                >
                </input>

              </div>
            </div>          
          </div>
        </div>
      </div>
    )
  }
}
