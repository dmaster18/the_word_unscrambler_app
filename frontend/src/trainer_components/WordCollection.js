import React, { Component } from 'react';

const WordCollection = (props) => (
  <div className= 'wordCollectionColumn'>
    <div className='columnHeader'>{props.columnHeader}</div>
    <ul className='words'>
      {props.columnData.map(word => <li>{word}</li>)}
    </ul>
  </div>
)

export default WordCollection
