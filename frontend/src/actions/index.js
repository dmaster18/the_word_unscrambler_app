function shuffle(letters) {
  return letters.split('').sort(() => Math.random() - 0.5);
}

export function fetchTrainerWords() {
  return (dispatch) => {
    dispatch({type: 'FETCH_TRAINER_WORDS_START' });
    return fetch('http://127.0.0.1:3000/word_collections')
    .then(response => response.json())
    .then(json => dispatch({type: 'FETCH_TRAINER_WORDS_SUCCESS',
      data: json.data.map(word_collection => ({
        twoLetterWords: word_collection.attributes.two_letter_word_collection,
        threeLetterWords: word_collection.attributes.three_letter_word_collection,
        fourLetterWords: word_collection.attributes.four_letter_word_collection,
        fiveLetterWords: word_collection.attributes.five_letter_word_collection,
        sixLetterWords: word_collection.attributes.six_letter_word_collection,
        sevenLetterWords: word_collection.attributes.seven_letter_word_collection,
        eightLetterWords: word_collection.attributes.eight_letter_word_collection,
        nineLetterWords: word_collection.attributes.nine_letter_word_collection
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


/*
export function submitPlayerData() {
  const formSubmitButton = document.getElementById('form-submit-button');
  formSubmitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const name = document.getElementById('user[name]').value;
    const data = { player: { name, score: this.state.score} };
    const playersURL = 'http://127.0.0.1:3000/players';
    return (dispatch) => {}
    fetch(playersURL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(() => {console.log('hello')});

  return (dispatch) => {
    dispatch({type: 'SEND_PLAYER_DATA_START' });
    return fetch(`http://127.0.0.1:3000/players/?limit=${numberOfWords}`)
    .then(response => response.json())
    .then(json => dispatch({type: 'SEND_PLAYER_DATA_SUCCESS',
    data: json.data.map(word => ({
      name: word.attributes.name,
      letterArray: shuffle(word.attributes.name),
      allWords: word.attributes.all_words.map((word) => word.toLowerCase())
    }))
  }))
  .catch((error) => {console.log(error); dispatch({type: 'SEND_PLAYER_DATA_ERROR'})});
};
}

export function submitPlayerData () {
   const main = document.createElement('main');
   const leaderboardForm = document.createElement('div');
   leaderboardForm.innerHTML = '<form><label for="player[name]">Enter your name:</label><input type="text" name="player[name]" id="player[name]"><input type="hidden" id="player[score]" name="player[score]"><button type="submit" value="Submit" id="form-submit-button">Submit</button></form>';
   main.appendChild(leaderboardForm);
   const formSubmitButton = document.getElementById('form-submit-button');
   formSubmitButton.addEventListener('click', (event) => {
     event.preventDefault();
     const name = document.getElementById('user[name]').value;
     const data = { player: { name, score: this.state.score} };
     const playersURL = 'http://127.0.0.1:3000/players';
     return fetch(playersURL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(() => {console.log('hello')});
   });
 }
 */
*/
