import React, { Component } from 'react';
import Word from './Word.js'

export default class WordContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      correctWords: [],
      incorrectWords: []
    };
  }

  increment = (userInput) => {
    const newScore = this.state.score + userInput.length
    this.setState({
     score: newScore
    })
 }

  evaluateWord = (userInput) => {
    if ((this.props.allWords).includes(userInput)){
      this.setState({
       correctWords: [...this.state.correctWords, userInput]
      })
      this.increment(userInput);
    } else {
        this.setState({
          incorrectWords: [...this.state.incorrectWords, userInput]
      })
    }
  }

  render() {
    return (
      <Word letterArray={this.props.letterArray} evaluateWord={this.evaluateWord} correctWords={this.state.correctWords} incorrectWords={this.state.incorrectWords}/>
    )
  }
}
