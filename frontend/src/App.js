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
            <Link to="/game">Full Game</Link>
            <br></br>
            <Link to="/leaderboard">Leaderboard</Link>
          </Route>
          <Route exact path="/game">
            <Game/>
          </Route>
          <Route exact path="/leaderboard">
            <Leaderboard/>
          </Route>
       </Switch>
       <br></br>
       <Link to="/">Home Page</Link>
      </div>
    </Router>
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
