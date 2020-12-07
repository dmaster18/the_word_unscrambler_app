import React, { Component } from 'react';


export default class Word extends Component {
  constructor() {
    super()
  }

  tilesContainerCreator = () => {
    return(
      <div className='tile-container'>
        this.tilesCreator()
      </div>
    )
  }

  tilesCreator = () => {
    return(
        {this.props.letters.map(letter => `<div className='title'>${letter}</div>`)}
      )
  }

  render() {
    return this.tilesContainerCreator()
  }
}
