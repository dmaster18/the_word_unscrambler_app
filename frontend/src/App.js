import logo from './logo.svg';
import './App.css';
import Game from './Game.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="the-word-unscrambler">
      </header>
      <Router>
        <div>
          <nav>
          <ul>

            <li>
              <Link to="/game">Full Game</Link>
            </li>

            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
          </nav>
        <Switch>

          <Route path="/game">
            <Game />
          </Route>

          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
       </Switch>
      </div>

    </Router>


      <Game/>
    </div>
  );
}

/*
<li>
  <Link to="/quickgame">Quick Game</Link>
</li>
<li>
  <Link to="/trainer">Word Trainer</Link>
</li>
<Route path="/quickgame">
  <Quickgame />
</Route>
<Route path="/trainer">
  <Trainer />
</Route>
 */

export default App;
