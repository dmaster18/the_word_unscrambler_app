import logo from './logo.svg';
import './App.css';
import Game from './Game.js'
import Leaderboard from './Leaderboard.js'
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
        <Switch>
          <Route exact path="/">
            <nav className="navigation">
              <Link to="/quick-game">Quick Game</Link>
              <Link to="/full-game">Full Game</Link>
              <Link to="/leaderboard">Leaderboard</Link>
            </nav>
          </Route>
          <Route exact path="/quick-game">
            <Game numberOfWords={1} gameDuration={1*60*1000}/>
            <nav>
              <Link to="/">Home Page</Link>
            </nav>
          </Route>
          <Route exact path="/full-game">
            <Game numberOfWords={10} gameDuration={5*60*1000}/>
            <nav>
              <Link to="/">Home Page</Link>
            </nav>
          </Route>
          <Route exact path="/leaderboard">
            <Leaderboard/>
            <nav>
              <Link to="/">Home Page</Link>
            </nav>
          </Route>
       </Switch>
       <br></br>
      </div>
    </Router>
    </div>
  );
}

export default App;




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
