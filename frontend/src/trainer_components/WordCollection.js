import React, { Component } from 'react';

const WordCollection = (props) => (
  //<div className= 'wordCollectionColumn'>
  <tr>
    <th> {props.columnHeader}</th>
  </tr>
  <tr>
    {props.columnData.map(word => <td>{word}</td>)}
  </tr>
)

export default WordCollection
