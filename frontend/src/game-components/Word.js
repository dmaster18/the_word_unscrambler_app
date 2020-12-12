import React, { Component } from 'react';


export default class Word extends Component {
  constructor(props) {
    super(props)
    this.wordArray = []
    this.words = []
    this.state = {
      wordFormed: '',
      wordsFormed: []
    }
  }

  tilesCreator() {
    return ("activized".split("")/*this.props.randomLetters*/).map(letter => <div className='tile'><button onClick={this.handleTileClick} value={letter}>{letter}</button></div>)
  }

  handleTileClick = (event) => {
    this.wordArray.push(event.target.value);
    this.setState({
      wordFormed: this.wordArray.join('')
    });
  }

  handleDeleteButtonClick = () => {
    let currentWord = document.getElementById('current-word').innerText;
    currentWord = currentWord.slice(0,-1);
    this.setState(
      {wordFormed: currentWord}
    )
  }

  handleSubmitButtonClick = () => {
    this.words.push(this.state.wordFormed);
    this.wordArray = [];
    this.setState(
      {wordsFormed: this.words}
    )
  }

  render() {
    return (
      <div>
        <div id='display-current-word'> Your Current Word: <div id='current-word' value={this.state.wordFormed}>{this.state.wordFormed}</div> </div>
        <div className='tile-container'>
          {this.tilesCreator()}
        </div>
        <div>
          <button onClick={this.handleDeleteButtonClick}>Delete Letter</button>
          <button onClick={this.handleSubmitButtonClick}>Submit Word</button>
        </div>
        <div className='submitted-words'>
          <div className='correct-words'></div>
          <div className='incorrect-words'></div>
        </div>
      </div>
    )
  }
}


/*  this.wordArray = [];
  this.setState(
    {wordsFormed: this.words}
  )
}

submitButtonCreator() {
  return (<br><br><div><button onClick={this.handleSubmitButtonClick}>Submit Word</button></div>)
}

*/
