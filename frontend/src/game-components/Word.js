import React, { Component } from 'react';


export default class Word extends Component {
  constructor(props) {
    super(props)
  }

  tilesCreator() {
    return (this.props.letterArray).map((letter, index) => <button onClick={this.props.onTileClick} value={letter} className='tile'id={index} key={`${letter}${index}`}>{letter}</button>)
  }

  displaySubmittedWords = (words) => {
    return words.map((submittedWord, index) => <div>{index +1}. {submittedWord}</div>)
  }

  render() {
    return (
      <div>
        <div id='display-current-word'> <span>Your Current Word: </span><div id='current-word' value={this.props.wordFormed}>{this.props.wordFormed}</div> </div>
        <div className='score'>
          Your Current Score: {this.props.score} Points
        </div>
        <div className='warning'>
          {this.props.warning}
        </div>
        <div className='tile-container'>
          {this.tilesCreator()}
        </div>
        <div className='buttons'>
          <button onClick={this.props.onDeleteLetter}>Delete Last Letter</button>
          <button onClick={this.props.onDeleteWord}>Delete Current Word</button>
          <button onClick={this.props.onSubmit}>Submit Word</button>
        </div>
        <div className='submitted-words'>
          <div className='all-submitted-words'>
            <b><u>All Submitted Words:</u></b>
            {this.displaySubmittedWords(this.props.submittedWords)}
          </div>
          <div className='correct-words'>
            <b><u>Correct Words</u></b>
            {this.displaySubmittedWords(this.props.correctWords)}
          </div>
          <div className='incorrect-words'></div>
            <b><u>Incorrect Words</u></b>
            {this.displaySubmittedWords(this.props.incorrectWords)}
        </div>
      </div>
    )
  }
}
