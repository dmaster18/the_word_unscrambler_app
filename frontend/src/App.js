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
            <Link to="/quick-game">Quick Game</Link>
            <Link to="/full-game">Full Game</Link>
            <Link to="/leaderboard">Leaderboard</Link>
          </Route>
          <Route exact path="/quick-game">
            <Game numberOfWords={1} gameDuration={1*60*1000}/>
          </Route>
          <Route exact path="/full-game">
            <Game numberOfWords={10} gameDuration={5*60*1000}/>
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
