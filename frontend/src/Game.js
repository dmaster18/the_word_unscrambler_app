import React, { Component } from 'react';
import WordContainer from './game-components/WordContainer.js'
import Word from './game-components/Word.js'
import Leaderboard from './Leaderboard.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Timer from 'timer-node'

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
      nextText: 'Next Letter Set',
      seconds: 0
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


  shuffle(letters) {
    return letters.split('').sort(() => Math.random() - 0.5);
  }

  timer = () => {
    const timer = new Timer('test-timer');
    return timer;
  }



  viewScore = () => {
    let gameElement = document.getElementById('game')
    gameElement.innerHTML= `<h1 id='final-score'>Your Final Score is ${this.state.score} Points!</h1><br><br><button onClick=${this.submitPlayerData}>Submit to Leaderboard</button>`
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
      this.viewScore();
    }
    else {
      this.setState(
        {nextText: 'View Score'}
        )
    }
  }

  increment = (userInput) => {
    let newScore = this.state.score + userInput.length
    this.setState({
     score: newScore
    })
 }

 submitPlayerData () {
   const main = document.createElement('main');
   const leaderboardForm = document.createElement('div');
   leaderboardForm.innerHTML = '<form><label for="player[name]">Enter your name:</label><input type="text" name="player[name]" id="player[name]"><input type="hidden" id="player[score]" name="player[score]"><button type="submit" value="Submit" id="form-submit-button">Submit</button></form>';
   main.appendChild(leaderboardForm);
   const formSubmitButton = document.getElementById('form-submit-button');
   formSubmitButton.addEventListener('click', (event) => {
     event.preventDefault();
     const name = document.getElementById('user[name]').value;
     const data = { player: { name, score: this.state.score} };
     const playersURL = 'http://127.0.0.1:3000/players';
     return fetch(playersURL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(() => {console.log('hello')});
   });
 }

 componentDidMount() {
   this.timer.start();
   this.fetchWords().then(json => {
   this.setState(
     {gameInfo: json,
     wordSession: json.data[this.state.i].attributes,
     seconds: this.timer.seconds()
     }
   )})
 }

  render() {
    return (
      <div id="game">
      <div id='timer'> {this.state.seconds} Seconds </div>
      {this.state.wordSession.name && this.state.seconds <= 300 &&
        <WordContainer letterArray={this.shuffle(this.state.wordSession.name)} name={this.state.wordSession.name} allWords={this.state.wordSession.all_words} score ={this.state.score} increment={this.increment}/>
      }
        <button onClick={this.next}>{this.state.nextText}</button>
      </div>
    )
  }
}
