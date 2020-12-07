import React, { Component } from 'react';
import WordContainer from './game-components/WordContainer.js'
import Response from './game-components/Response.js'
import Timer from './game-components/Timer.js'
import LeaderBoard from './game-components/LeaderBoard.js'


export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameInfo: {}
    }
  }

  fetchWords() {
      const words_url = `http://127.0.0.1:3000/words/3`;
      return fetch(words_url).then(resp => resp.json());
  }

  renderWords() {
    this.fetchWords().then(json => {this.generateWords(json)})
  }

  componentDidMount() {
    this.fetchWords().then(json => {console.log(json);
      this.setState(
        {gameInfo: json.data.attributes}
    )})
  }

  generateWord() {
    <WordContainer name={gameInfo.name} twoLetterWords={gameInfo.two_letter_words} threeLetterWords={gameInfo.three_letter_words} fourLetterWords={gameInfo.four_letter_words} fiveLetterWords={gameInfo.five_letter_words} sixLetterWords={gameInfo.six_letter_words} sevenLetterWords={gameInfo.seven_letter_words} eightLetterWords={gameInfo.eight_letter_words} nineLetterWords={gameInfo.nine_letter_words} />
    //json.data.map(word => {
    //  <WordContainer name={word.name} twoLetterWords={word.two_letter_words} threeLetterWords={word.three_letter_words} fourLetterWords={word.four_letter_words} fiveLetterWords={word.five_letter_words} sixLetterWords={word.six_letter_words} sevenLetterWords={word.seven_letter_words} eightLetterWords={word.eight_letter_words} nineLetterWords={word.nine_letter_words} />
    //})
  }

  render() {
    return (
      <div id="game">
        {this.generateWord()}
        //<WordContainer />
      </div>
    )
  }
}
