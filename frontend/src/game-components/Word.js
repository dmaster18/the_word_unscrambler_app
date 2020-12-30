import React, { Component } from 'react';
import WordList from './WordList';
import Tile from './Tile';
import Button from './Button'

const Word = (props) => (
  <div>
    <div id='display-current-word'> <span>Your Current Word: </span><div id='current-word' value={props.wordFormed}>{props.wordFormed}</div> </div>
    <div className='score'>
      Your Current Score: {props.score} Points
    </div>
    <div className='warning'>
      {props.warning}
    </div>
    <div className='tile-container'>
     {props.letterArray.map((letter, index) => (<Tile key={`${letter}${index}`} onClick={props.onTileClick} letter={letter} id={index} />))}
    </div>
    <div className='buttons'>
      <Button onClick={props.onDeleteLetter} innerText='Delete Last Letter'/>
      <Button onClick={props.onDeleteWord} innerText='Delete Current Word'/>
      <Button onClick={props.onSubmit} innerText='Submit Word'/>
      <button onClick={props.onDeleteLetter}>Delete Last Letter</button>
      <button onClick={props.onDeleteWord}>Delete Current Word</button>
      <button onClick={props.onSubmit}>Submit Word</button>
      {props.onGetNextWord && <button onClick={props.onGetNextWord}>Get Next Word Grouping</button>}
    </div>
    <div className='submitted-words'>
      <div className='all-submitted-words'>
        <WordList title="All Submitted Words" words={props.submittedWords} />
      </div>
      <div className='correct-words'>
        <WordList title="Correct Words" words={props.correctWords} />
      </div>
      <div className='incorrect-words'>
        <WordList title="Incorrect Words" words={props.incorrectWords} />
      </div>
    </div>
  </div>
)

export default Word
