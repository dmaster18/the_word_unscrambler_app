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


          </ul>
          </nav>
        <Switch>
          <Route path="/game">
            <Game/>
          </Route>

       </Switch>
      </div>
    </Router>
    </div>
  );
}





/*

<li>
  <Link to="/leaderboard">Leaderboard</Link>
</li>

<Route path="/leaderboard">
  <Leaderboard/>
</Route>

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
