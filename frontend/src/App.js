import logo from './logo.svg';
import './App.css';
import Game from './Game.js'



function App() {
  constructor(props) {
    this.state = {
      startGame: false
    };
  }

  startGame = () => {this.setState({initiateGame: true})}

  return (
    <div className="App">
      <header className="the-word-unscrambler">
      </header>
        <button onClick={this.startGame}>Start Game</button>
        {if(this.state.initiateGame === true) {
          <Game/>
        }}
    </div>
  );
}

export default App;
