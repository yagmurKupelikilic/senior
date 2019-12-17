import React, { Component } from 'react'

const UserContext = React.createContext();
// Provider, Consumer
const reducer = (state, action) => {
    switch(action.type){
        case "DELETE_Order":
        return {
            ...state, 
            users: state.users.filter(user => action.payload !== user.id ) 
        }
        case  "ADD_ORDER":
        return {
          ...state, //es6 eski state i ayırdık (...)
          users : [...state.users,action.payload]
        }
        case "UPDATE_ORDER" : 
        return {
          ...state,
          users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
        }
        default :
        return state
    }
}

export class UserProvider extends Component {
    state = {
        users: [
          // {
          //   id: "id-1",
          //   name: "yagmur",
          //   salary: "5200",
          //   department: "bilisim"
          // },
          // {
          //   id: "id-2",
          //   name: "kivilcim",
          //   salary: "6000",
          //   department: "bilisim"
          // },
          // {
          //   id: "id-3",
          //   name: "kemalettin",
          //   salary: "200",
          //   department: "bilisim"
          // }
        ],
        dispatch : action => {
            this.setState(state => reducer(state,action))
        }
      }
  render() {
    return (
      <div>
        {/* Provider return edilir  value ile state gönderilir*/}
        <UserContext.Provider value = {this.state}>
             {this.props.children}  {/* it is like <App.js/> */}
        </UserContext.Provider>
      </div>
    )
  }
}
// value kullanabilmek için oluşturulur.
const UserConsumer = UserContext.Consumer;

export default UserConsumer;