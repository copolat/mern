import React, { Component } from "react";

export default class ChildMain extends Component {
  // Created by cwm snippet
  componentWillMount() {
    console.log("ChildMain componentWillMount is working... ");
  }
  // Created by cdm snippet
  componentDidMount() {
    console.log("ChildMain componentDidMount is working... ");
  }

  // Created by rconst snippet
  constructor(props) {
    super(props);
    console.log("ChildMain Constructor is working... ");
    console.log("ChildMain Props=> ", props);
    this.state = {};
  }
  // Created by CWR
  componentWillReceiveProps(nextProps) {
    console.log(
      "ChildMain componentWillReceiveProps is working. nextProps=> ",
      nextProps
    );
  }
  // changeNameChild = () => {
  //   this.props.changeName()
  // }
  // Create by SCU
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "ChildMain shouldComponentUpdate is working. nextProps=> ",
      nextProps
    );
    return true;
  }

  // Create by CWUP
  componentWillUpdate(nextProps, nextState) {
    console.log(
      "ChildMain componentWillUpdate is working. nextProps=> ",
      nextProps,
      "nextState=> ",
      nextState
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "ChildMain componentDidUpdate is working. nextProps=> ",
      prevProps,
      "nextState=> ",
      prevState
    );
  }
  // Created by CWUN
  componentWillUnmount() {
    console.log("ChildMain componentDidUpdate is working.");
  }

  render() {
    console.log("ChildMain render is working... ");
    return (
      <div>
        <h2>ChildMain Component...</h2>
        <b>Props {this.props.name}</b> <br />
        <button
          onClick={() => {
            this.props.changeName();
          }}
        >
          Change the name
        </button>
      </div>
    );
  }
}
