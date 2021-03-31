import React, {Component} from 'react';

class BlogItem extends Component {
  render(){
    console.log(this.props)
    return (
      <div>
        <h2>BLOG ITEM</h2>
        <h3>Title:</h3>
        <h3>Description:{this.props.blogMessage}</h3>
        <p>{this.props.text}</p>
        <h2>Athor Name: {this.props.data.uName} {this.props.data.lastname}</h2>

      </div>
    )
  }
}

export default BlogItem