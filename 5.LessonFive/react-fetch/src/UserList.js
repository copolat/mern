import React, { Component } from 'react'

export default class UserList extends Component {
  state={user:[]}
  componentDidMount() {
         setTimeout(() => {
          fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((json) => console.log(json));
      
     }, 10000);

  }
  
  render() {
    return (
      <div>
        <h2>USERLIST Component</h2>
      </div>
    )
  }
}
