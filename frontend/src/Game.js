import React, { Component } from 'react';
import WordContainer from './game-components/WordContainer.js'
import Word from './game-components/Word.js'
import Response from './game-components/Response.js'
import Timer from './game-components/Timer.js'
import LeaderBoard from './game-components/LeaderBoard.js'


export default class Game extends Component {
  constructor(props) {
    super(props)
    this.i = 0
    this.questionCompleted = false
    this.state = {
      score: 0,
      i: 0,
      gameInfo: {},
      wordSession: {},
      nextText: 'Next Letter Set'
    }
  }

  fetchWords() {
    const words_url = 'http://127.0.0.1:3000/words/?limit=15';
    return fetch(words_url).then(resp => resp.json());
  }

  initiateGame() {
    return this.fetchWords().then(words => this.renderWord(words));
  }


  renderWord = (words) => {
    return console.log(words.data[this.i].attributes.name)
  }


  componentDidMount() {
    this.fetchWords().then(json => {
    this.setState(
      {gameInfo: json,
      wordSession: json.data[this.state.i].attributes
      }
    )})
  }

  shuffle(letters) {
    return letters.split('').sort(() => Math.random() - 0.5);
  }

  next = () => {
    if (this.i < (this.state.gameInfo.data.length - 1)){
      this.i +=1
      let newWordSession = this.state.gameInfo.data[this.i].attributes
      this.setState(
        {i: this.i,
          wordSession: newWordSession}
        )
    } else if (this.state.nextText === 'View Score') {
      let gameElement = document.getElementById('game')
      gameElement.innerHTML= `<div>Your Final Score is ${this.state.score} Points!</div><br><br><button>View Leaderboard</button>`


    }
    else {
      this.setState(
        {nextText: 'View Score'}
        )
    }
  }

  increment = (userInput) => {
    const newScore = this.state.score + userInput.length
    this.setState({
     score: newScore
    })
 }


  render() {
    return (
      <div id="game">
      {this.state.wordSession.name &&
        <WordContainer letterArray={this.shuffle(this.state.wordSession.name)} name={this.state.wordSession.name} allWords={this.state.wordSession.all_words} score ={this.state.score} increment={this.increment}/>
      }
        <button onClick={this.next}>{this.state.nextText}</button>
      </div>
    )
  }
}


/*  {this.state.wordSession.name &&
    <>
      <WordContainer letterArray={this.shuffle(this.state.wordSession.name)} name={this.state.wordSession.name} twoLetterWords={this.state.wordSession.two_letter_words} threeLetterWords={this.state.wordSession.three_letter_words} fourLetterWords={this.state.wordSession.four_letter_words} fiveLetterWords={this.state.wordSession.five_letter_words} sixLetterWords={this.state.wordSession.six_letter_words} sevenLetterWords={this.state.wordSession.seven_letter_words} eightLetterWords={this.state.wordSession.eight_letter_words} nineLetterWords={this.state.wordSession.nine_letter_words} allWords={this.state.wordSession.all_words}/>
    </>
  }*/


          /*<Timer/>*/
