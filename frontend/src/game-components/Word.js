import React, { Component } from 'react';


export default class Word extends Component {
  constructor(props) {
    super(props)
  }

  tilesContainerCreator = () => {
    return(
      <div className='tile-container'>
        {this.tilesCreator()}
      </div>
    )
  }

  tilesCreator = () => {
    return (this.props.randomLetters).map(letter => <div className='tile'>{letter}</div>)
  }

  render() {
    return (
      <div className='tile-container'>
        {console.log(this.props.randomLetters)}
        {this.tilesCreator()}
      </div>
    )
  }
}
