function shuffle(letters) {
  return letters.split('').sort(() => Math.random() - 0.5);
}

export function fetchWords(numberOfWords) {
  return (dispatch) => {
    dispatch({type: 'FETCH_WORDS_START' });
    fetch(`http://127.0.0.1:3000/words/?limit=${numberOfWords}`)
    .then(response => response.json())
    .then(json => dispatch({type: 'FETCH_WORDS_SUCCESS',
      data: json.data.map(word => {name: word.attributes.name,
      letterArray: shuffle(word.attributes.name), allWords: word.attributes.all_words}}))
    .catch(() => dispatch({type: 'FETCH_WORDS_ERROR'}));
  };
}

export function deleteWord() {
  return {type: 'DELETE_WORD'}
}

export function deleteLetter() {
  return {type: 'DELETE_LETTER'}
}

export function addLetter(usedTile) {
  return {type: 'ADD_LETTER', usedTile}
}

export function submitWord() {
  return {type: 'SUBMIT_WORD'}
}

export function nextWord() {
  return {type: 'NEXT_WORD'}
}

export function startGame() {
  return {type: 'START_GAME'}
}


export function endGame() {
  return {type: 'END_GAME'}
}
