import React, { Component } from 'react';


export default class Word extends Component {
  constructor(props) {
    super(props)
    this.eventIDArray = []
    this.wordArray = []
    this.words = []
    this.state = {
      warning: null,
      wordFormed: '',
      wordsSubmitted: []
    }
  }

  tilesCreator() {
    return (this.props.letterArray).map((letter, index) => <button onClick={this.handleTileClick} value={letter} className='tile'id={index} key={`${letter}${index}`}>{letter}</button>)
  }

  handleTileClick = (event) => {
      this.setState({
          warning: null
        });
      if (!this.eventIDArray.includes(event.target.id)){
        this.eventIDArray.push(event.target.id);
        this.wordArray.push(event.target.value);
        this.setState({
          wordFormed: this.wordArray.join('')
        });
      }
      else {
        this.setState({
            warning: <div>CAN'T USE SAME TILE TWICE IN ONE WORD!</div>
          })
        return this.state.warning;
      }
  }

  handleDeleteLetterButtonClick = () => {
    let currentWord = document.getElementById('current-word').innerText;
    currentWord = currentWord.slice(0,-1);
    this.wordArray = currentWord.split('');
    this.eventIDArray.pop();
    this.setState(
      {wordFormed: this.wordArray.join(''), warning: null}
    )
  }

  handleDeleteWordButtonClick = () => {
    let currentWord = document.getElementById('current-word').innerText;
    currentWord = [];
    this.wordArray = currentWord;
    this.eventIDArray = [];
    this.setState(
      {wordFormed: this.wordArray.join(''), warning: null}
    )
  }

  handleSubmitButtonClick = () => {
    this.words.push(this.state.wordFormed);
    this.props.evaluateWord(this.state.wordFormed);
    this.wordArray = [];
    this.eventIDArray = [];
    this.setState(
      {wordsSubmitted: this.words, warning: null}
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
        <div className='warning'>
          {this.state.warning}
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
