import React, { Component } from 'react';

export default class Leaderboard extends Component {

  fetchUsers () {
    const usersURL = 'http://127.0.0.1:3000/users';
    return fetch(usersURL).then(resp => resp.json());
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
    const userData = json.data;
    const leaderboard = document.createElement('table');
    leaderboard.classList.add('leaderboard');
    const leaderboardHeader = '<tr><th>Name</th><th>Score</th><th>Percentage</th></tr><tr>';
    const sortedUserData = userData.sort(function (a, b) { return a.attributes.name.localeCompare(b.attributes.name); }); //Sorts leaderboard alphabetically using JS instead of Rails
    const arrayOfUserData = sortedUserData.map(user => `<tr><td>${user.attributes.name}</td> <td>${user.attributes.score} Points</td> <td>${user.attributes.percentage}%</td></tr>`);
    const leaderboardData = arrayOfUserData.join(' ');
    leaderboard.innerHTML = `${leaderboardHeader} ${leaderboardData}`;
    main.appendChild(leaderboard);
  }

  render () {
    const main = document.querySelector('main');
    this.renderLoadingState();
    main.innerHTML = '';
    this.fetchUsers().then(json => this.renderLeaderboard(json));
  }
}

  render() {
    return null
  }
}
