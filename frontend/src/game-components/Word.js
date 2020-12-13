import React, { Component } from 'react';


export default class Word extends Component {
  constructor(props) {
    super(props)
    this.wordArray = []
    this.words = []
    this.state = {
      wordFormed: '',
      wordsSubmitted: []
    }
  }

  tilesCreator() {
    return (this.props.letterArray).map((letter, index) => <button onClick={this.handleTileClick} value={letter} className='tile'id={index} key={`${letter}${index}`}>{letter}</button>)
  }

  handleTileClick = (event) => {
      this.wordArray.push(event.target.value);
      this.setState({
        wordFormed: this.wordArray.join('')
      });
  }

  handleDeleteLetterButtonClick = () => {
    let currentWord = document.getElementById('current-word').innerText;
    currentWord = currentWord.slice(0,-1);
    this.wordArray = currentWord.split('');
    this.setState(
      {wordFormed: this.wordArray.join('')}
    )
  }

  handleDeleteWordButtonClick = () => {
    let currentWord = document.getElementById('current-word').innerText;
    currentWord = [];
    this.wordArray = currentWord;
    this.setState(
      {wordFormed: this.wordArray.join('')}
    )
  }

  handleSubmitButtonClick = () => {
    this.words.push(this.state.wordFormed);
    this.props.evaluateWord(this.state.wordFormed);
    this.wordArray = [];
    this.setState(
      {wordsSubmitted: this.words}
    )
  }

  displaySubmittedWords = (words) => {
    return words.map((submittedWord, index) => <div>{index +1}. {submittedWord}</div>)
  }

  render() {
    return (
      <div>
        <div id='display-current-word'> <span>Your Current Word: </span><div id='current-word' value={this.state.wordFormed}>{this.state.wordFormed}</div> </div>
        <div className='score'>
          Your Current Score: {this.props.score} Points
        </div>
        <div className='tile-container'>
          {this.tilesCreator()}
        </div>
        <div className='buttons'>
          <button onClick={this.handleDeleteLetterButtonClick}>Delete Last Letter</button>
          <button onClick={this.handleDeleteWordButtonClick}>Delete Current Word</button>
          <button onClick={this.handleSubmitButtonClick}>Submit Word</button>
        </div>
        <div className='submitted-words'>
          <div className='all-submitted-words'>
            <b><u>All Submitted Words:</u></b>
            {this.displaySubmittedWords(this.state.wordsSubmitted)}
          </div>
          <div className='correct-words'>
            <b><u>Correct Words</u></b>
            {this.displaySubmittedWords(this.props.correctWords)}
          </div>
          <div className='incorrect-words'></div>
            <b><u>Incorrect Words</u></b>
            {this.displaySubmittedWords(this.props.incorrectWords)}
        </div>
      </div>
    )
  }
}
