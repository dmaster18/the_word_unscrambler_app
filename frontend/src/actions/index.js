case 'FETCH_WORDS_START':
  return initialState
case 'FETCH_WORDS_SUCCESS':
  return {...state, wordSet: action.data, gameStatus: 'Running'}
case 'FETCH_WORDS_ERROR':
  return {...state, wordSet: [], gameStatus: 'Error'}
function deleteWord() {
  return {type: 'DELETE_WORD'}
}

function deleteLetter() {
  return {type: 'DELETE_LETTER'}
}

function addLetter(usedTile) {
  return {type: 'ADD_LETTER', usedTile}
}

function submitWord() {
  return {type: 'SUBMIT_WORD'}
}

function nextWord() {
  return {type: 'NEXT_WORD'}
}

function startGame() {
  return {type: 'START_GAME'}
}


function endGame() {
  return {type: 'END_GAME'}
}
