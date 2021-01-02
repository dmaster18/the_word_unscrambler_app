import React, { Component } from 'react';

const WordCollection = (props) => (
  <div className='word-collections'>
    <div className='word-column'>
      <h3>
        {props.columnHeader}
      </h3>
      <ul>
        {props.columnData.map(word => <li>{word}</li>)}
      </ul>
    </div>
  </div>
)

export default WordCollection
