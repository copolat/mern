import React, { Component } from "react";
import BlogItem from './BlogItem'

export default class Blog extends Component {
  constructor(props){
    super(props);
    this.state={
      number: 10
    }
  }

  blogClick = () => {
    console.log("Hello from BLOG.JS")
    console.log(this.state.number)
    this.setState({
      number: 'Tom' + Math.floor(Math.random()*10)
    })
  }
  render() {
    let greet = 'Welcome...'
    let userInfo = {
      uName: 'Jack', 
      lastname:'Johansson',
      age: 45
    }
    let blogMessage = 123
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet tempor mi, non rhoncus leo. Vestibulum pellentesque suscipit facilisis. Donec tempor neque in nisi malesuada, sed gravida urna rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sit amet elit molestie leo rutrum ultrices. Ut tempor urna a purus molestie, ac faucibus enim consequat. Proin facilisis vestibulum enim, et fringilla mi fringilla quis.
    Duis accumsan sem at ultrices aliquam. Donec consectetur, dolor vel porttitor egestas, tortor nibh porta massa, at venenatis quam libero vitae libero. Phasellus enim nulla, ornare ut nunc nec, volutpat pulvinar nunc. Cras non tempus arcu. Cras id efficitur lectus. Phasellus eleifend nisl id gravida varius. Curabitur odio purus, sagittis vel magna nec, sodales sodales elit. Vivamus et orci mi. Phasellus ac ullamcorper massa. Mauris convallis nisl et lorem convallis, vel consequat lacus suscipit. Vestibulum tempor leo sed urna tincidunt, nec rhoncus purus semper. Fusce non nisl bibendum, facilisis lorem ac, ultricies est.`
    return (
      <div>
        <h1> BLOG COMPONENT ..... UPDATED..... </h1>
        <p>TEXT TEXT TEXT </p>
        <h3>{greet}</h3>
        <BlogItem blogMessage="This is a message from BLOG.JS" data={userInfo} text={text} blogClick={this.blogClick}/>
        {/* <BlogItem blogMessage={blogMessage} text={text}/> */}
      </div>
    );
  }
}
//export default Blog;
