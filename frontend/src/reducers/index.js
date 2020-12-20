initialState = {score: 0, wordIndex: 0, wordSet: [],
gameStatus: 'Loading', wordFormed: '', correctWords: [], incorrectWords: [],
submittedWords: [], userWarning: null}

function reducer(state=initialState, action) {
  switch(action.type) {
    case 'FETCH_WORDS_START':
      return initialState
    case 'FETCH_WORDS_SUCCESS':
      return {...state, wordSet: action.data, gameStatus: 'Running'}
    case 'FETCH_WORDS_ERROR':
      return {...state, wordSet: [], gameStatus: 'Error'}
    case 'DELETE_WORD':
      return {...state, wordFormed: '', userWarning: null}
    case  'DELETE_LETTER':
      return {...state, wordFormed: state.wordFormed.slice(0,-1), userWarning: null}
    case 'ADD_LETTER':
      return {...state, wordFormed: state.wordFormed + action.letter}
    case 'SUBMIT_WORD':
      if (state.wordSet.data[state.wordIndex].all_words.includes(state.wordFormed) && !state.correctWords.includes(state.wordFormed)){
        return {...state, submittedWords: [...state.submittedWords, state.wordFormed],
         correctWords: [...state.correctWords, state.wordFormed], score: state.score += state.wordFormed.length
        }
      } else {
         return {...state, submittedWords: [...state.submittedWords, state.wordFormed],
         incorrectWords: [...state.incorrectWords, state.wordFormed]
        }
      }
    case 'NEXT_WORD':
      if (state.wordIndex === state.wordSet.data.length - 1){
        return {...state, gameStatus: 'Complete'}
      } else {
        return {...state, wordIndex: state.wordIndex +=1}
      }
    case 'SET_WARNING':
    
    case 'START_GAME'
    case 'END_GAME'

  }


}
