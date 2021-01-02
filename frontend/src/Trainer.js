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
    switch (this.props.status) {
      case 'Loading': {
        return 'Loading...'
      }
      case 'Running': {
        return (
          <div id="trainer">
            <WordCollection columnHeader='Two-Letter Words' columnSelector='two-letter-words' columnData={this.props.trainerWords[0].twoLetterWords} />
            <WordCollection columnHeader='Three-Letter Words' columnSelector='three-letter-words' columnData={this.props.trainerWords[0].threeLetterWords} />
            <WordCollection columnHeader='Four-Letter Words' columnSelector='four-letter-words' columnData={this.props.trainerWords[0].fourLetterWords} />
            <WordCollection columnHeader='Five-Letter Words'columnSelector='five-letter-words'  columnData={this.props.trainerWords[0].fiveLetterWords} />
            <WordCollection columnHeader='Six-Letter Words' columnSelector='six-letter-words' columnData={this.props.trainerWords[0].sixLetterWords} />
            <WordCollection columnHeader='Seven-Letter Words' columnSelector='seven-letter-words' columnData={this.props.trainerWords[0].sevenLetterWords} />
            <WordCollection columnHeader='Eight-Letter Words' columnSelector='eight-letter-words' columnData={this.props.trainerWords[0].eightLetterWords} />
            <WordCollection columnHeader='Nine-Letter Words' columnSelector='nine-letter-words' columnData={this.props.trainerWords[0].nineLetterWords} />
          </div>
        )
        }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trainer)
