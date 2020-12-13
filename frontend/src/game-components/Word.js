import React, { Component } from 'react';


export default class Word extends Component {
  constructor(props) {
    super(props)
    this.wordArray = []
    this.words = []
    this.state = {
      wordFormed: '',
      wordsSubmitted: []
    }
  }

  tilesCreator() {
    return ("activized".split("")/*this.props.randomLetters*/).map((letter, index) => <div className='tile' value={index}><button onClick={this.handleTileClick} value={letter}>{letter}</button></div>)
  }

  handleTileClick = (event) => {
      this.wordArray.push(event.target.innerText);
      this.setState({
        wordFormed: this.wordArray.join('')
      });
  }

  handleDeleteLetterButtonClick = () => {
    let currentWord = document.getElementById('current-word').innerText;
    currentWord = currentWord.slice(0,-1);
    this.wordArray = currentWord.split('');
    this.setState(
      {wordFormed: this.wordArray.join('')}
    )
  }

  handleDeleteWordButtonClick = () => {
    let currentWord = document.getElementById('current-word').innerText;
    currentWord = [];
    this.wordArray = currentWord;
    this.setState(
      {wordFormed: this.wordArray.join('')}
    )
  }

  handleSubmitButtonClick = () => {
    this.words.push(this.state.wordFormed);
    this.wordArray = [];
    this.setState(
      {wordsSubmitted: this.words}
    )
  }

  displaySubmittedWords = () => {
    return this.state.wordsSubmitted.map((submittedWord, index) => <div>{index +1}. {submittedWord}</div>)
  }

  render() {
    return (
      <div>
        <div id='display-current-word'> <b><u>Your Current Word:</u></b> <div id='current-word' value={this.state.wordFormed}>{this.state.wordFormed}</div> </div>
        <div className='tile-container'>
          {this.tilesCreator()}
        </div>
        <div className='buttons'>
          <button onClick={this.handleDeleteLetterButtonClick}>Delete Last Letter</button>
          <button onClick={this.handleDeleteWordButtonClick}>Delete Current Word</button>
          <button onClick={this.handleSubmitButtonClick}>Submit Word</button>
        </div>
        <div className='submitted-words'>
          <div className='all-submitted-words'>
            <b><u>All Submitted Words:</u></b>
            {this.displaySubmittedWords()}
          </div>
          <div className='correct-words'>
            <b><u>Correct Words</u></b>
          </div>
          <div className='incorrect-words'></div>
            <b><u>Incorrect Words</u></b>
        </div>
      </div>
    )
  }
}


/*  this.wordArray = [];
  this.setState(
    {wordsSubmitted: this.words}
  )
}

submitButtonCreator() {
  return (<br><br><div><button onClick={this.handleSubmitButtonClick}>Submit Word</button></div>)
}

*/
