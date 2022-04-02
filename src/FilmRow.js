import React, { Component } from 'react'
import Poster from './Poster'
import Fave from './Fave'

export default class FilmRow extends Component {
  render() {



    return (
        <div className="film-row">
            <Poster url={this.props.film.poster_path} altText={`${this.props.film.title} Poster` }/>

            <div className="film-summary">
                <h1>{this.props.film.title}</h1>
                <p>{this.props.film.release_date.slice(0,4)}</p>
            </div>
            <Fave />
        </div>
    )
  }
}