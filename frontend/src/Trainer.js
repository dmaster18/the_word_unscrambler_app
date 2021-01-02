import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { fetchTrainerWords } from './actions';
import WordCollection from './trainer_components/WordCollection'


function mapDispatchToProps(dispatch){
  return { fetchTrainerWords: () => dispatch(fetchTrainerWords()) }
}

function mapStateToProps(state) {
  return { trainerWords: state.trainerWords, status: state.trainerStatus}
}

class Trainer extends Component {

 componentDidMount() {
   this.props.fetchTrainerWords();
 }

  render() {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trainer)

/*
switch (this.props.status) {
  case 'Loading': {
    return 'Loading...'
  }
  case 'Running': {
    return (
      <div id="trainer">
        <WordCollection columnHeader='Two-Letter Words' columnData={this.props.trainerWords.twoLetterWords} />
        <WordCollection columnHeader='Three-Letter Words' columnData={this.props.trainerWords.threeLetterWords} />
        <WordCollection columnHeader='Four-Letter Words' columnData={this.props.trainerWords.fourLetterWords} />
        <WordCollection columnHeader='Five-Letter Words' columnData={this.props.trainerWords.fiveLetterWords} />
        <WordCollection columnHeader='Six-Letter Words' columnData={this.props.trainerWords.sixLetterWords} />
        <WordCollection columnHeader='Seven-Letter Words' columnData={this.props.trainerWords.sevenLetterWords} />
        <WordCollection columnHeader='Eight-Letter Words' columnData={this.props.trainerWords.eightLetterWords} />
        <WordCollection columnHeader='Nine-Letter Words' columnData={this.props.trainerWords.nineLetterWords} />
      </div>
    )
    }
}
 */
