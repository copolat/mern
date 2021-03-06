import React, { Component } from "react";
import "../Styles/Form.css";
import PropTypes from 'prop-types';

export default class Form extends Component {
  static checkProps = {addContact: PropTypes.func}
  state = {
    name: "",
    phone: "",
  };
  onInputChange = (e) => {
    //console.log(e.target.value)
    // if(e.target.name === 'name') {
    //   this.setState({name:e.target.value})
    // } else if (e.target.name === 'phone'){
    //   this.setState({
    //     phone: e.target.value
    //   })
    this.setState({ [e.target.name]: e.target.value });
    //console.log(this.state);
  };
  sendForm = (event) =>{
    event.preventDefault();
    //console.log('Form submitted...');
    if (this.state.name !== '' && this.state.phone !== '') {
      this.props.addContact({...this.state})
    } else {
      alert('Name or Phone cannot be empty!!!')
    }
    this.setState({name:'', phone:''})
  }
  render() {
    return (
      <form onSubmit={this.sendForm} className="formField">
        <h2>Form</h2>
        <input
          onChange={this.onInputChange}
          value = {this.state.name}
          name="name"
          id="name"
          placeholder="Enter a name..."
        />
        <input
          onChange={this.onInputChange}
          value = {this.state.phone}
          name="phone"
          id="phone"
          placeholder="Enter a phone number..."
        />
        <button>ADD</button>
      </form>
    );
  }
}
