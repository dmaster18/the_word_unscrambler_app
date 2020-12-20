import React, { Component } from 'react';

export default class Timer extends Component {

  renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
     // Render a completed state
      return this.viewScore();
    } else {
     // Render a countdown
      return <span>{minutes}:{seconds}</span>;
    }
  };
  render() {
    return (
        <Countdown date={this.initialTime + 0.5*60*1000} renderer={this.renderer}/>
    )
  }

}
