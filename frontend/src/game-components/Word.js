import React, { Component } from 'react';


export default class Word extends Component {
  constructor(props) {
    super(props)
    this.eventArray = []
    this.wordArray = []
    this.words = []
    this.state = {
      wordFormed: '',
      wordsSubmitted: []
    }
  }

  tilesCreator() {
    return ("activized".split("")/*this.props.randomLetters*/).map((letter, index) => <div className='tile' id={index}><button onClick={this.handleTileClick} value={letter}>{letter}</button></div>)
  }

  handleTileClick = (event) => {
    if (!this.eventArray.includes(event.target.id)){
      this.wordArray.push(event.target.value);
      event.target.value = '';
      this.setState({
        wordFormed: this.wordArray.join('')
      });
    }
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
    this.eventArray = [];
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
        <div id='display-current-word'> Your Current Word: <div id='current-word' value={this.state.wordFormed}>{this.state.wordFormed}</div> </div>
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
          <div className='correct-words'></div>
          <div className='incorrect-words'></div>
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
