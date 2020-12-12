import React, { Component } from 'react';
import Word from './Word.js'

export default class WordContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      randomLetters: []
    };
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

  shuffleWordName = () => {
    //let randomLetters = (this.props.title)//.split('').sort(() => Math.random() - 0.5)
    this.setState({
      randomLetters: this.props.title
    })
  }

  componentDidMount() {
    console.log(this.props.title)
    this.shuffleWordName();
  }

  render() {
    return (
      <Word randomLetters={this.state.randomLetters}/>
    )
  }
}
