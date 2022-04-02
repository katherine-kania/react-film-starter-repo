import React, { Component } from 'react'

export default class Fave extends Component {
    handleClick = (e) => {
        console.log('handle fave click')
    }
    render() {


        return (
            <div className="film-row-fave add_to_queue">
                <p className="material-icons" onClick={this.handleClick}>add_to_queue</p>
            </div>
        )
    }
}