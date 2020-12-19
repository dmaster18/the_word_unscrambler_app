import logo from './logo.svg';
import './App.css';
import Game from './Game.js'



function App() {


  return (
    <div className="App">
      <header className="the-word-unscrambler">
      </header>
      <Game/>
    </div>
  );
}

/*startGame = () => {<Game/>}
<button onClick={this.startGame}>Start Game</button>*/

export default App;
