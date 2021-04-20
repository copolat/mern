import axios from "axios";
import React, { Component } from "react";

export default class UserList extends Component {
  state = { users: [], isLoding: true };
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((result) => result.json())
    // // .then((jsonData) => console.log(jsonData));
    // .then((jsonData) => this.setState({users:jsonData, isLoding:false}));
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((result) =>this.setState({users:result.data, isLoding:false}))
  }

  render() {
    //console.log(this.state.users)
    const {isLoding, users} = this.state
    return (
      <div>
        <h2>USERLIST </h2>
      {isLoding === true ? "Loading..." : this.state.users.map((item)=>{
        return <div key={item.id}> {item.name}</div>
      })}
        {/* {this.state.users.map((item)=>{
          return <div  key={item.id}>{item.name} {item.username}</div>
  })} */}
      </div>
    );
  }
}
