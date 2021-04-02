import React, { Component } from "react";
import PropTypes from "prop-types";
import '../styles/BlogItem.css'
//state-ful   
class BlogItem extends Component {
  constructor(props){
    super(props)
    console.log('Hello from Constructor function...')
    console.log(props)
    this.state ={
      name: 'Tom',
      lastname: 'Jackson',
      age: 32,
      addrees: '23 Broadway'
    }
  }
  static propTypes = {
    blogMessage: PropTypes.string.isRequired,
    // data: PropTypes.object,
    text: PropTypes.string.isRequired,
    data: PropTypes.shape({uName: PropTypes.string.isRequired, age:PropTypes.number})
  };
  buttonClick = () => {
    console.log("Hello from BLOG ITEM")
  }
  render() {
    console.log(this.props);
    const myStyle = {
      color: "coral",
      backgroundColor: "darkblue"
    }
    return (
      <div>
        <h2 style={{color:"red", fontFamily:"Comic Sans"}}>BLOG ITEM</h2>
        <h3 className="subtitle">Title:</h3>
        <h3>Description:{this.props.blogMessage}</h3>
        <p style={myStyle}>{this.props.text}</p>
        <h2>
          Athor Name: {this.props.data.uName} {this.props.data.lastname}
        </h2>
        <button onClick={this.buttonClick.bind(this)}> ADD </button>
        <button onClick={this.props.blogClick}> CLICK </button>
        <hr/>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default BlogItem;
