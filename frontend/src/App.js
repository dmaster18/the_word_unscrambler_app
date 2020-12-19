import logo from './logo.svg';
import './App.css';
import Game from './Game.js'



function App() {
  return (
    <div className="App">
      <header className="the-word-unscrambler">
      </header>
      <Router>
        <nav>
        <ul>
          <li>
            <Link to="/quickgame">Quick Game</Link>
            </li>
          <li>
            <Link to="/game">Full Game</Link>
          </li>
          <li>
            <Link to="/trainer">Word Trainer</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
    </nav>
      </Router>


      <Game/>
    </div>
  );
}

/*startGame = () => {<Game/>}
<button onClick={this.startGame}>Start Game</button>*/

export default App;
