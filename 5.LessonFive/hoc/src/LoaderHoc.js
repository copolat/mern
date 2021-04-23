import React, { Component } from 'react'
// Created by rafce
const LoaderHoc = (WrappedComponent, field) => {
  return class LoaderHoc extends Component {
    render() {
      return this.props[field].length === 0 ? (<div>Loading...</div>):
      <WrappedComponent{...this.props}/>
    }
  }
}

export default LoaderHoc





