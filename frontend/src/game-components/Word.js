import React, { Component } from 'react';


export default class Word extends Component {
  constructor(props) {
    super(props)
    word = []
    this.state = {
      wordFormed: '',
      wordsFormed: []
    };
  }

  tilesContainerCreator = () => {
    return(
      <div className='tile-container'>
        {this.tilesCreator()}
      </div>
    )
  }

  tilesCreator = () => {
    return (this.props.randomLetters).map(letter => <div className='tile'><button onClick={this.handleTileClick}>{letter}</button></div>)
  }

  handleTileClick() {
    this.word.push(this.innerText)
    this.setState({
      this.word.join('')
    })
  }

  render() {
    return (
      <div className='tile-container'>
        {this.tilesCreator()}
      </div>
    )
  }
}
