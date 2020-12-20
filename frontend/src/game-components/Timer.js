import React, { Component } from 'react';
import Countdown from "react-countdown";

const zeroPad = (number) => {
  if (number < 10) {
    return `0${number}`;
  } else {
    return number;
  }
}
export default class Timer extends Component {
  renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
     // Render a completed state
      return null
    } else {
     // Render a countdown
      return <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
    }
  };

  render() {
    return (
      <Countdown date={this.props.initialTime + this.props.numberOfMilliseconds} renderer={this.renderer} onComplete={this.props.onComplete}/>
    )
  }

}
