initialState = {score: 0, wordIndex: 0, wordSet: [],
gameStatus: 'Loading', wordFormed: '', usedTiles: [], correctWords: [], incorrectWords: [],
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
      return {...state, usedTiles: [], userWarning: null}
    case  'DELETE_LETTER':
      const usedTiles = [...state.usedTiles]
      usedTiles.pop()
      return {...state, usedTiles, userWarning: null}
    case 'ADD_LETTER':
      if (usedTiles.find((tile) => tile.id === action.usedTile.id)) {
        return {...state, userWarning: "Can't use same tile twice. Please choose another."}
      } else {
        return {...state, usedTiles: [...state.usedTiles, action.usedTile]}
      }
    case 'SUBMIT_WORD':
      const lettersUsed = state.usedTiles.map(usedTile => usedTile.letter);
      const wordFormed = lettersUsed.join('');
      if (state.wordSet.data[state.wordIndex].all_words.includes(wordFormed) && !state.correctWords.includes(wordFormed)){
        return {...state, submittedWords: [...state.submittedWords, wordFormed],
         correctWords: [...state.correctWords, wordFormed], score: state.score += wordFormed.length, usedTiles: []
       } else if (state.correctWords.includes(wordFormed)) {
         return {...state, userWarning: "Can't submit word twice.", usedTiles: []}
       } else {
         return {...state, submittedWords: [...state.submittedWords, wordFormed],
         incorrectWords: [...state.incorrectWords, wordFormed], usedTiles: []
        }
      }
    case 'NEXT_WORD':
      if (state.wordIndex === state.wordSet.data.length - 1){
        return {...state, gameStatus: 'Complete', usedTiles: []}
      } else {
        return {...state, wordIndex: state.wordIndex +=1, usedTiles: []}
      }
    case 'START_GAME'
    case 'END_GAME'

  }


}
