import React, { Component } from 'react';
import '../Styles/Form.css'

export default class Form extends Component {
  render() {
    return (
      <div className="formField">
        <h2>Form</h2>
        <input name="name" id="name" placeholder="Enter a name..."/>
        <input name="phone" id="phone" placeholder="Enter a phone number..."/>
        <button>ADD</button>
      </div>
    )
  }
}
