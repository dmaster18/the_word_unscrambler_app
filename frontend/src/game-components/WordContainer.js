import React, { Component } from 'react';
import Word from './Word.js'
import { connect } from 'react-redux'
import { clickTile, deleteLetter, deleteWord, nextWord, submitWord } from '../actions'

function mapDispatchToProps(dispatch){
  return {
    clickTile: (tile) => dispatch(clickTile(tile)),
    deleteLetter: () => dispatch(deleteLetter()),
    deleteWord: () => dispatch(deleteWord()),
    submitWord: () => dispatch(submitWord()),
    getNextWord: () => dispatch(nextWord()),
  }
}

function mapStateToProps(state) {
  return {
    letterArray: state.wordSet[state.wordIndex].letterArray,
    correctWords: state.correctWords,
    incorrectWords: state.incorrectWords,
    submittedWords: state.submittedWords,
    score: state.score,
    warning: state.userWarning,
    wordFormed: state.usedTiles.map(tile => tile.letter).join(''),
    numberOfWords: state.wordSet.length,
  };
}

class WordContainer extends Component {

/*  constructor(props) {
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
  }*/

/*
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
*/
  handleTileClick = (event) => {
    this.props.clickTile({letter: event.target.value, id: event.target.id})
  }
/*
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
        return this.props.warning;
      }
  }*/


  /*
  handleDeleteLetterButtonClick = () => {
    let currentWord = document.getElementById('current-word').innerText;
    currentWord = currentWord.slice(0,-1);
    this.wordArray = currentWord.split('');
    this.eventIDArray.pop();
    this.setState(
      {wordFormed: this.wordArray.join(''), warning: null}
    )
  }
  */
 /*
  handleDeleteWordButtonClick = () => {
    let currentWord = document.getElementById('current-word').innerText;
    currentWord = [];
    this.wordArray = currentWord;
    this.eventIDArray = [];
    this.setState(
      {wordFormed: this.wordArray.join(''), warning: null}
    )
  }
*/
/*
  handleSubmitButtonClick = () => {
    this.words.push(this.state.wordFormed.toUpperCase());
    this.evaluateWord(this.state.wordFormed.toUpperCase());
    this.wordArray = [];
    this.eventIDArray = [];
    this.setState(
      {wordsSubmitted: this.words, warning: null}
    )
  }
*/

  render() {
    return (
      <Word
        letterArray={this.props.letterArray}
        correctWords={this.props.correctWords}
        incorrectWords={this.props.incorrectWords}
        submittedWords={this.props.submittedWords}
        score={this.props.score}
        warning={this.props.warning}
        onTileClick={this.handleTileClick}
        onDeleteLetter={this.props.deleteLetter}
        onDeleteWord={this.props.deleteWord}
        onSubmit={this.props.submitWord}
        wordFormed={this.props.wordFormed}
        onGetNextWord={this.props.numberOfWords > 1 ? this.props.getNextWord : undefined}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordContainer)
