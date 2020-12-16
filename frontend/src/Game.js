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
      gameInfo: {},
      wordSession: {}
    }
  }

  fetchWords() {
    const words_url = 'http://127.0.0.1:3000/words/?limit=10';
    return fetch(words_url).then(resp => resp.json());
  }

  initiateGame() {
    return this.fetchWords().then(words => this.renderWord(words));
  }

  /*if this.questionCompleted*/
/*    this.i+=1;*/

  renderWord(words) {
    return console.log(words.data[this.i].attributes.name)
  }


  componentDidMount() {
    this.fetchWords().then(json => {
    this.setState(
      {gameInfo: json,
      wordSession: json.data[this.i].attributes
      }
    )})
  }

  //generateWord() {
    //<WordContainer name={this.state.wordSession.name} twoLetterWords={this.state.wordSession.two_letter_words} threeLetterWords={this.state.wordSession.three_letter_words} fourLetterWords={this.state.wordSession.four_letter_words} fiveLetterWords={this.state.wordSession.five_letter_words} sixLetterWords={this.state.wordSession.six_letter_words} sevenLetterWords={this.state.wordSession.seven_letter_words} eightLetterWords={this.state.wordSession.eight_letter_words} nineLetterWords={this.state.wordSession.nine_letter_words} />
    //json.data.map(word => {
    //  <WordContainer name={word.name} twoLetterWords={word.two_letter_words} threeLetterWords={word.three_letter_words} fourLetterWords={word.four_letter_words} fiveLetterWords={word.five_letter_words} sixLetterWords={word.six_letter_words} sevenLetterWords={word.seven_letter_words} eightLetterWords={word.eight_letter_words} nineLetterWords={word.nine_letter_words} />
    //})
  shuffle(letters) {
      return letters.split('').sort(() => Math.random() - 0.5);
  }


  render() {
    return (
      <div id="game">
        {console.log(this.state.wordSession)}
      </div>
    )
  }
}

/*{this.state.wordSession.name &&
  <WordContainer letterArray={this.shuffle(this.state.wordSession.name)} name={this.state.wordSession.name} allWords={this.state.wordSession.all_words}/>
}*/
/*  {this.state.wordSession.name &&
    <>
      <WordContainer letterArray={this.shuffle(this.state.wordSession.name)} name={this.state.wordSession.name} twoLetterWords={this.state.wordSession.two_letter_words} threeLetterWords={this.state.wordSession.three_letter_words} fourLetterWords={this.state.wordSession.four_letter_words} fiveLetterWords={this.state.wordSession.five_letter_words} sixLetterWords={this.state.wordSession.six_letter_words} sevenLetterWords={this.state.wordSession.seven_letter_words} eightLetterWords={this.state.wordSession.eight_letter_words} nineLetterWords={this.state.wordSession.nine_letter_words} allWords={this.state.wordSession.all_words}/>
    </>
  }*/


          /*<Timer/>*/
