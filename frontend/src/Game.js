import React, { Component } from 'react';
import WordContainer from './game-components/WordContainer.js'
import Word from './game-components/Word.js'
import Leaderboard from './Leaderboard.js'
import Timer from './game-components/Timer.js'
import { connect } from 'react-redux'
import {fetchWords, endGame, nextWord } from './actions'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function mapDispatchToProps(dispatch){
  return { fetchWords: () => dispatch(fetchWords()),
   endGame: () => dispatch(endGame()),
   getNextWord: () => dispatch(nextWord())
  }
}

function mapStateToProps(state){
  return {status: state.gameStatus, score: state.score, letterArray: state.wordSet[state.wordIndex].letterArray, allWords: state.wordSet[state.wordIndex].allWords}
}

class Game extends Component {
  constructor(props) {
    super(props)
  }

/*
  fetchWords() {
    const words_url = `http://127.0.0.1:3000/words/?limit=${this.props.numberOfWords}`;
    return fetch(words_url).then(resp => resp.json());
  }
*/

  /*shuffle(letters) {
    return letters.split('').sort(() => Math.random() - 0.5);
  }*/


  /*
  next = () => {
    if (this.i < (this.state.gameInfo.data.length - 1)){
      this.i +=1
      let newWordSession = this.state.gameInfo.data[this.i].attributes
      this.setState(
        {i: this.i,
          wordSession: newWordSession}
        )
    } else {
      this.setState(
        {status: 'Complete'}
      )
    }
  }
  */

/*
  increment = (userInput) => {
    let newScore = this.state.score + userInput.length
    this.setState({
     score: newScore
    })
 }
*/

/*
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
 */

 /*handleComplete = () => {
   this.setState(
     {status: 'Complete'}
   )
 }*/


 componentDidMount() {
   this.props.fetchWords(this.props.numberOfWords).then(() => {
     this.setState({ initialTime: Date.now() });
   });
 }



  render() {
    switch (this.props.status) {
      case 'Loading': {
        return 'Loading...'
      }
      case 'Running': {
        return (
          <div id="game">
            <Timer initialTime={this.state.initialTime} numberOfMilliseconds={this.props.gameDuration} onComplete={this.props.endGame}/>
            <WordContainer letterArray={this.props.letterArray} allWords={this.props.allWords} score ={this.props.score}/>
            {this.props.numberOfWords > 1 && (<button onClick={this.props.getNextWord}>Next Letter Grouping</button>)}
          </div>
        )
        }
        case 'Complete': {
          return (
            <>
              <h1 id='final-score'>Your Final Score is {this.props.score} Points!</h1>
              <button onClick={this.submitPlayerData}>Submit to Leaderboard</button>
            </>
          );
        }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
