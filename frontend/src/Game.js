import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import WordContainer from './game-components/WordContainer';
import Word from './game-components/Word';
import Leaderboard from './Leaderboard';
import Timer from './game-components/Timer';
import {fetchWords, endGame, nextWord } from './actions';

function mapDispatchToProps(dispatch){
  return { fetchWords: (numberOfWords) => dispatch(fetchWords(numberOfWords)),
   endGame: () => dispatch(endGame()),
  }
}

function mapStateToProps(state) {
  return {status: state.gameStatus, score: state.score,
    letterArray: state.wordSet.length > 0 ? state.wordSet[state.wordIndex].letterArray : [],
    allWords: state.wordSet.length > 0 ? state.wordSet[state.wordIndex].allWords : []}
}

class Game extends Component {
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


 componentDidMount() {
   this.props.fetchWords(this.props.numberOfWords);
 }

  render() {
    switch (this.props.status) {
      case 'Loading': {
        return 'Loading...'
      }
      case 'Running': {
        return (
          <div id="game">
            <Timer numberOfMilliseconds={this.props.gameDuration} onComplete={this.props.endGame}/>
            <WordContainer />
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
