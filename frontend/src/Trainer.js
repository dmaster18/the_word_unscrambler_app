import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { fetchTrainerWords } from './actions';

function mapDispatchToProps(dispatch){
  return { fetchTrainerWords: () => dispatch(fetchTrainerWords) }
}

function mapStateToProps(state) {
  return null
}

class Trainer extends Component {

 componentDidMount() {
   this.props.fetchTrainerWords();
 }

  render() {
    switch (this.props.status) {
      case 'Loading': {
        return 'Loading...'
      }
      case 'Running': {
        return (
          <div id="trainer">
            <WordCollection columnHeader = 'Two-Letter Words' columnType={this.props.twoLetterWords} />
            <WordCollection columnHeader = 'Three-Letter Words' columnType={this.props.threeLetterWords} />
            <WordCollection columnHeader = 'Four-Letter Words' columnType={this.props.fourLetterWords} />
            <WordCollection columnHeader = 'Five-Letter Words' columnType={this.props.fiveLetterWords} />
            <WordCollection columnHeader = 'Six-Letter Words' columnType={this.props.sixLetterWords} />
            <WordCollection columnHeader = 'Seven-Letter Words' columnType={this.props.sevenLetterWords} />
            <WordCollection columnHeader = 'Eight-Letter Words' columnType={this.props.eightLetterWords} />
            <WordCollection columnHeader = 'Nine-Letter Words' columnType={this.props.nineLetterWords} />
          </div>
        )
        }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trainer)
