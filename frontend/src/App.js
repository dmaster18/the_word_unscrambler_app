import logo from './logo.svg';
import './App.css';
import Game from './Game.js'
import React from 'react';


export default class App extends Component {
  return (
    <div className='App'>
      <header className="the-word-unscrambler"></header>
      <Game/>
    </div>
  );
}

/*startGame = () => {<Game/>}
<button onClick={this.startGame}>Start Game</button>*/
