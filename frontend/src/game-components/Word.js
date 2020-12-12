import React, { Component } from 'react';


export default class Word extends Component {
  constructor(props) {
    super(props)
    /*this.state = {
      wordFormed: '',
      wordsFormed: []
    };*/
  }

  tilesCreator() {
    return (this.props.randomLetters)//.map(letter => <div className='tile'>{letter}</div>)
  }

  render() {
    return (
      <div className='tile-container'>
        {this.tilesCreator()}
      </div>
    )
  }
}

/*<button onClick={this.handleTileClick}>*/
/*</button>*/
  /*handleTileClick() {
    this.word.push(this.innerText)
    this.setState({
      wordFormed: this.word.join('')
    })
  }*/
