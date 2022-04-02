import React, { Component } from 'react'

export default class Poster extends Component {
  render() {
    return (
        <div>
           <img src={`https://image.tmdb.org/t/p/w780/${this.props.url}`} alt={this.props.altText} /> 
      </div>
    )
  }
}