import React, { Component } from 'react'
import User from "./User";
import UserConsumer from "../context";

class Users extends Component {
  render() {

      return(
        //value kullanabilmek için userconsumer
          <UserConsumer>
            {
              value => {
                const {users} = value;

                  return (
                   <div>
                     {   users.map(user =>
                       {
                          return (
                           <User
                              key = {user.id}
                              id = {user.id}
                              username = {user.username}
                              office = {user.office}
                              orderType = {user.orderType}
                              amount = {user.amount}
                              linkTo = {user.linkTo}
                              status = {user.status}
                              price = {user.price}
                            />
                           )
                        })
                       }
                      </div>
                    )
              }
            }
          </UserConsumer>
      )



   
  }
}


export default Users;
