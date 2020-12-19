import logo from './logo.svg';
import './App.css';
import Game from './Game.js'



function App() {


  startGame = () => {<Game/>}

  return (
    <div className="App">
      <header className="the-word-unscrambler">
      </header>
        <button onClick={this.startGame}>Start Game</button>

    </div>
  );
}

export default App;
