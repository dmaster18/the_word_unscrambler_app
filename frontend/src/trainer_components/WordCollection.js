import React, { Component } from 'react';

const WordCollection = (props) => (
  //<div className= 'wordCollectionColumn'>
  <div className={props.columnSelector}>
    <h3>
      {props.columnHeader}
    </h3>
    <ul>
      {props.columnData.map(word => <li>{word}</li>)}
    </ul>
  </div>
)

export default WordCollection
