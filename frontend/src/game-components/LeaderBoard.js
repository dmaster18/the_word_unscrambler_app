import React, { Component } from 'react';

export default class Leaderboard extends Component {

  fetchplayers () {
    const playersURL = 'http://127.0.0.1:3000/players';
    return fetch(playersURL).then(resp => resp.json());
  }

  renderLoadingState () {
    const main = document.querySelector('main');
    main.innerHTML = '';
    const gifContainer = document.createElement('div');
    gifContainer.classList.add('gif-container');
    const gifElement = document.createElement('img');
    gifElement.src = '../gifs/old_bartender.gif';
    gifContainer.appendChild(gifElement);
    main.appendChild(gifContainer);
  }

  renderLeaderboard (json) {
    const main = document.querySelector('main');
    const playerData = json.data;
    const leaderboard = document.createElement('table');
    leaderboard.classList.add('leaderboard');
    const leaderboardHeader = '<tr><th>Name</th><th>Score</th><th>Percentage</th></tr><tr>';
    const arrayOfPlayerData = playerData.map(player => `<tr><td>${player.attributes.name}</td> <td>${player.attributes.score} Points</td> <td>${player.attributes.percentage}%</td></tr>`);
    const leaderboardData = arrayOfPlayerData.join(' ');
    leaderboard.innerHTML = `${leaderboardHeader} ${leaderboardData}`;
    main.appendChild(leaderboard);
  }

  render () {
    const main = document.querySelector('main');
    this.renderLoadingState();
    main.innerHTML = '';
    this.fetchplayers().then(json => this.renderLeaderboard(json));
  }
}

  render() {
    return null
  }
}
