function shuffle(letters) {
  return letters.split('').sort(() => Math.random() - 0.5);
}

export function fetchTrainerWords {
  return (dispatch) => {
    dispatch({type: 'FETCH_TRAINER_WORDS_START' });
    return fetch('http://127.0.0.1:3000/word_collections')
    .then(response => response.json())
    .then(json => dispatch({type: 'FETCH_TRAINER_WORDS_SUCCESS',
      data: json.data.map(word_collection => ({
        twoLetterWords: word.attributes.two_letter_word_collection,
        threeLetterWords: word.attributes.three_letter_word_collection,
        fourLetterWords: word.attributes.four_letter_word_collection,
        fiveLetterWords: word.attributes.five_letter_word_collection,
        sixLetterWords: word.attributes.six_letter_word_collection,
        sevenLetterWords: word.attributes.seven_letter_word_collection,
        eightLetterWords: word.attributes.eight_letter_word_collection,
        nineLetterWords: word.attributes.nine_letter_word_collection
      }))
  }))
  .catch((error) => {console.log(error); dispatch({type: 'FETCH_TRAINER_WORDS_ERROR'})});
};
}

export function fetchWords(numberOfWords) {
  return (dispatch) => {
    dispatch({type: 'FETCH_WORDS_START' });
    return fetch(`http://127.0.0.1:3000/words/?limit=${numberOfWords}`)
    .then(response => response.json())
    .then(json => dispatch({type: 'FETCH_WORDS_SUCCESS',
    data: json.data.map(word => ({
      name: word.attributes.name,
      letterArray: shuffle(word.attributes.name),
      allWords: word.attributes.all_words.map((word) => word.toLowerCase())
    }))
  }))
  .catch((error) => {console.log(error); dispatch({type: 'FETCH_WORDS_ERROR'})});
};
}


export function deleteWord() {
  return {type: 'DELETE_WORD'}
}

export function deleteLetter() {
  return {type: 'DELETE_LETTER'}
}

export function clickTile(usedTile) {
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
