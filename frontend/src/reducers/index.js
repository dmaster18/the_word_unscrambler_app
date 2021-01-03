const initialState = {score: 0, wordIndex: 0, wordSet: [],
gameStatus: 'Loading', usedTiles: [], correctWords: [], incorrectWords: [],
submittedWords: [], userWarning: null, trainerWords: [], trainerStatus: 'Loading', submitStatus: 'Loading', playerData: {}}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case 'FETCH_TRAINER_WORDS_START':
      return initialState
    case 'FETCH_TRAINER_WORDS_SUCCESS':
      return {...state, trainerWords: action.data, trainerStatus: 'Running'}
    case 'FETCH_TRAINER_WORDS_ERROR':
      return {...state, trainerWords: [], trainerStatus: 'Error'}
    case 'FETCH_WORDS_START':
      return initialState
    case 'FETCH_WORDS_SUCCESS':
      return {...state, wordSet: action.data, gameStatus: 'Running'}
    case 'FETCH_WORDS_ERROR':
      return {...state, wordSet: [], gameStatus: 'Error'}
    case 'DELETE_WORD':
      return {...state, usedTiles: [], userWarning: null}
    case  'DELETE_LETTER':
      const usedTiles = [...state.usedTiles]
      usedTiles.pop()
      return {...state, usedTiles, userWarning: null}
    case 'ADD_LETTER':
      if (state.usedTiles.find((tile) => (tile.id === action.usedTile.id))) {
        return {
          ...state,
          userWarning: "Can't use same tile twice. Please choose another."
        }
      } else {
        return {
          ...state,
          usedTiles: [...state.usedTiles, action.usedTile],
          userWarning: null
        }
      }
    case 'SUBMIT_WORD':
      const lettersUsed = state.usedTiles.map(usedTile => usedTile.letter);
      const wordFormed = lettersUsed.join('');
      if (state.wordSet[state.wordIndex].allWords.includes(wordFormed.toLowerCase()) && !state.correctWords.includes(wordFormed)){
        return {
          ...state,
          submittedWords: [...state.submittedWords, wordFormed],
          correctWords: [...state.correctWords, wordFormed],
          score: (state.score += wordFormed.length),
          usedTiles: [],
        }
       } else if (state.correctWords.includes(wordFormed)) {
          return {...state, userWarning: "Can't submit word twice.", usedTiles: []}
       } else {
         return {...state, submittedWords: [...state.submittedWords, wordFormed],
         incorrectWords: [...state.incorrectWords, wordFormed], usedTiles: []
        }
      }
    case 'NEXT_WORD':
      if (state.wordIndex === (state.wordSet.length - 1)){
        return {...state, gameStatus: 'Complete', usedTiles: []}
      } else {
        return {...state, wordIndex: (state.wordIndex +=1), usedTiles: []}
      }
    case 'START_GAME':
      return {...state, gameStatus: 'Running'}
    case 'END_GAME':
      return {...state, gameStatus: 'Complete'}
    case 'SEND_PLAYER_DATA_START':
      return initialState
    case 'SEND_PLAYER_DATA_SUCCESS':
      return {...state, playerData: action.data, submitStatus: 'Running'}
    case 'SEND_PLAYER_DATA_ERROR':
      return {...state, playerData: {}, submitStatus: 'Error'}
    default:
      return state;
  }
}
