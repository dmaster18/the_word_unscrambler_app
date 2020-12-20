import React, { Component } from 'react';

export default class Leaderboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerData: []
    }
  }

  fetchplayers () {
    const playersURL = 'http://127.0.0.1:3000/players';
    const playerData = fetch(playersURL).then(resp => resp.json());
    this.setState(
      {playerData: playerData}
    )
  }

  renderLeaderboard () {
    const leaderboardHeader = '<tr><th>Name</th><th>Score</th>/tr>';
    const arrayOfPlayerData = this.state.playerData.map(player => `<tr><td>${player.attributes.name}</td> <td>${player.attributes.score} Points</td></tr>`);
    const leaderboardData = arrayOfPlayerData.join(' ');
    leaderboard.innerHTML = `${leaderboardHeader} ${leaderboardData}`;
    main.appendChild(leaderboard);
  }

  render () {
    return (<table className='leaderboard'>
      {this.renderLeaderboard()}
    </table>
  })
  }
  
}
