import React, { Component } from 'react';
import Word from './Word.js'

export default class WordContainer extends Component {
  constructor() {
    super()

    this.state = {
      score: 0,
      randomLetters: []
    };
  }

  shuffleWordName = () => {
    let randomLetters = this.props.name.split('').sort(() => Math.random() - 0.5)
    this.setState({
      randomLetters: randomLetters
    })
    //randomLetters
  }

  increment = (userInput) => {
    const newScore = this.state.score + userInput.length
    this.setState({
     count: newScore
    })
 }

  checkForWord(wordList, userInput) {
    if (wordList.includes(userInput)){
      this.response = 'Correct'
      this.increment(userInput);
    } else {
      this.response = 'Incorrect'
    }
  }

  evaluateResponse(userInput) {
    let userInputLength = userInput.length;
    switch(userInputLength) {
      case 2:
        this.checkforWord(this.props.twoLetterWords, userInput);
        break;
      case 3:
        this.checkforWord(this.props.threeLetterWords, userInput);
        break;
      case 4:
        this.checkforWord(this.props.fourLetterWords, userInput);
        break;
      case 5:
        this.checkforWord(this.props.fiveLetterWords, userInput);
        break;
      case 6:
        this.checkforWord(this.props.sixLetterWords, userInput);
        break;
      case 7:
        this.checkforWord(this.props.sevenLetterWords, userInput);
        break;
      case 8:
        this.checkforWord(this.props.eightLetterWords, userInput);
        break;
      case 9:
        this.checkforWord(this.props.nineLetterWords, userInput);
        break;
    }
  }

  render() {
    //this.shuffleWordName()
    return null
    //return (
    //  <Word name={this.props.name} randomLetters={this.state.randomLetters} />
    //)
  }
}
