import React, { Component } from 'react';


export default class Word extends Component {
  constructor(props) {
    super(props)
    this.word = []
    this.state = {
      wordFormed: '',
      wordsFormed: []
    }
  }

  tilesCreator() {
    return (this.props.randomLetters).map(letter => <div className='tile'><button onClick={this.handleTileClick} value={letter}>{letter}</button></div>)
  }

  handleTileClick = (event) => {
    this.word.push(event.target.value)
    this.setState({
      wordFormed: this.word.join('')
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
