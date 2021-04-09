import React, { Component } from "react";
import List from "./List";
import Form from "./Form";

export default class Contact extends Component {
  state = {
    contacts: [
      {name: 'Name 1', phone: '+1234567890'},
      {name: 'Name 2', phone: '+1265482540'},
      {name: 'Name 3', phone: '+9834567890'},
      {name: 'John', phone: '+5553337678'},
    ]
  }
  render() {
    return (
      <div>
        <List  contacts={this.state.contacts}/>
        <Form />
      </div>
    );
  }
}
// export default Contact;
