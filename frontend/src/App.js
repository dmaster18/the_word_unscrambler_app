import logo from './logo.svg';
import './App.css';
import Game from './Game.js'



function App() {
  return (
    <div className="App">
      <header className="the-word-unscrambler">
      </header>
        <a href='game.html'>Play Game</a>
        <a href='leadboard.html'> View Leaderboard</a>
      <Game/>
    </div>
  );
}

/*startGame = () => {<Game/>}
<button onClick={this.startGame}>Start Game</button>*/

export default App;
