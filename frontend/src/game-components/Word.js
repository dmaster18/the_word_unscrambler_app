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
    return (this.props.randomLetters).map(letter => <div className='tile'><button onClick={this.handleTileClick} value={letter}>{letter}</button></div>)
  }

  handleTileClick = (event) => {
    this.wordArray.push(event.target.value);
    this.setState({
      wordFormed: this.wordArray.join('')
    });
  }

  handleSubmitButtonClick = () => {
    return (this.words.push(this.state.wordFormed))
  }

  render() {
    return (
      <div className='tile-container'>
        {this.tilesCreator()}
        <br></br>
        <br></br>
        <div><button onClick={this.handleSubmitButtonClick}> Submit Word</button>
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
