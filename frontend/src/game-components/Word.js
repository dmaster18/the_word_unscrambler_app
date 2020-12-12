import React, { Component } from 'react';


export default class Word extends Component {
  constructor(props) {
    super(props)
    this.wordArray = []
    this.words = []
    this.state = {
      wordFormed: '',
      wordsFormed: []
    }
  }

  tilesCreator() {
    return (this.props.randomLetters).map(letter => <div className='tile'><button onClick={this.handleTileClick} value={letter}>{letter}</button></div>)
  }

  handleTileClick = (event) => {
    this.wordArray.push(event.target.value);
    this.setState({
      wordFormed: this.wordArray.join('')
    });
  }

  submitButtonCreator() {
    return (<br><br><div><button onClick={this.handleSubmitButtonClick}>Submit Word</button></div>)
  }

  handleSubmitButtonClick = (event) => {
    this.words.push(this.wordArray.join(''));
    this.wordArray = [];
    this.setState(
      {wordsFormed: this.words}
    )
  }

  gameCreator = () => {
    {this.tilesCreator()}
    {this.submitButtonCreator()}
  }

  render() {
    return (
      <div className='tile-container'>
        {this.gameCreator()}
      </div>
    )
  }
}
