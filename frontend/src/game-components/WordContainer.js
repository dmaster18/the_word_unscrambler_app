import React, { Component } from 'react';
import Word from './Word.js'

export default class WordContainer extends Component {

  constructor(props) {
    super(props)
    this.eventIDArray = []
    this.wordArray = []
    this.words = []
    this.state = {
      score: this.props.score,
      correctWords: [],
      incorrectWords: [],
      submittedWords: [],
      warning: null,
    };
  }

  evaluateWord = (userInput) => {
    userInput = userInput.toUpperCase()
    if ((this.props.allWords).includes(userInput) && !this.state.correctWords.includes(userInput)){
      this.setState({
       submittedWords: [...this.state.submittedWords, userInput],
       correctWords: [...this.state.correctWords, userInput]
      })
      this.props.increment(userInput);
    } else {
        this.setState({
          submittedWords: [...this.state.submittedWords, userInput],
          incorrectWords: [...this.state.incorrectWords, userInput]
      })
    }
  }

  handleTileClick = (event) => {
      this.setState({
          warning: null
        });
      if (!this.eventIDArray.includes(event.target.id)){
        this.evenftIDArray.push(event.target.id);
        this.wordArray.push(event.target.value);
        this.setState({
          wordFormed: this.wordArray.join('')
        });
      }
      else {
        this.setState({
            warning: <div>CAN'T USE SAME TILE TWICE IN ONE WORD!</div>
          })
        return this.props.warning;
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
    this.words.push(this.state.wordFormed.toUpperCase());
    this.evaluateWord(this.state.wordFormed.toUpperCase());
    this.wordArray = [];
    this.eventIDArray = [];
    this.setState(
      {wordsSubmitted: this.words, warning: null}
    )
  }

  render() {
    return (
      <Word letterArray={this.props.letterArray} evaluateWord={this.evaluateWord}
      correctWords={this.state.correctWords} incorrectWords={this.state.incorrectWords}
      submittedWords={this.state.submittedWords} score={this.props.score}
      warning={this.state.warning} onTileClick={this.handleTileClick}
      onDeleteLetter={this.handleDeleteLetterButtonClick}
      onDeleteWord={this.handleDeleteWordButtonClick}
      onSubmit={this.handleSubmitButtonClick}
      wordFormed={this.state.wordFormed}
      />
    )
  }
}
