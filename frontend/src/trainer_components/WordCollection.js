import React, { Component } from 'react';

const WordCollection = (props) => (
  <div className='word-column'>
    <h3 className='column-header'>
      {props.columnHeader}
    </h3>
    <ul>
      {props.columnData.map(word => <li>{word}</li>)}
    </ul>
  </div>
)

export default WordCollection
