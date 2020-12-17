import React, { Component } from 'react';
import Word from './Word.js'

export default class WordContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      score: this.props.score,
      correctWords: [],
      incorrectWords: []
    };
  }

  evaluateWord = (userInput) => {
    userInput = userInput.toUpperCase()
    if ((this.props.allWords).includes(userInput) && !this.state.correctWords.includes(userInput)){
      this.setState({
       correctWords: [...this.state.correctWords, userInput]
      })
      this.props.increment(userInput);
    } else {
        this.setState({
          incorrectWords: [...this.state.incorrectWords, userInput]
      })
    }
  }

  render() {
    return (
      <Word letterArray={this.props.letterArray} evaluateWord={this.evaluateWord} correctWords={this.state.correctWords} incorrectWords={this.state.incorrectWords} score={this.state.score}/>
    )
  }
}
