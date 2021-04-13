import React, { Component } from "react";
import "../Styles/List.css";
import PropTypes from "prop-types";

export default class List extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
  };
  state = { filterText: "" };
  onChangeFilter = (e) =>{
    //console.log('hello')
    this.setState({filterText: e.target.value})
  }
  render() {
    //console.log(this.props.contacts);
    const filteredData =this.props.contacts.filter(
      item=>{
        return item.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1
      }
      )
    return (
      <div className="listCompField">
        <h1>List</h1>
        <input
          name="filter"
          id="filter"
          value = {this.state.filterText}
          onChange={this.onChangeFilter}
          placeholder="Search by name or phone"
        />
        <ul>
          {filteredData.map((item,index) => {
            return (
              <li key={index}>
                <span className="name">{item.name}</span>
                <span className="phone">{item.phone}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
