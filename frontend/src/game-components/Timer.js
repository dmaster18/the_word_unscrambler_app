import React, { Component } from 'react';
import Countdown from "react-countdown";

export default class Timer extends Component {

  renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
     // Render a completed state
      return null
    } else {
     // Render a countdown
      return <span>{minutes}:{seconds}</span>;
    }
  };

  render() {
    return (
        <Countdown date={this.props.initialTime + this.props.numberOfMilliseconds} renderer={this.renderer} onComplete={this.props.onComplete}/>
    )
  }

}
