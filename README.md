# The Word Unscrambler

The Word Unscrambler is a game based on the JavaScript React framework. It allows users to play a game where they are tasked with generating as many words as possible from a random grouping of nine letters.

## Installation

The Word Unscrambler can be downloaded from https://github.com/dmaster18/the_word_unscrambler_app. Once the program is downloaded, go to the program's 'backend' directory from your local Terminal/Command Line and then run bundle install or bundle exec install to ensure all the dependencies are installed. After, run rails (or rake) db:migrate to set up the database. In order to populate the database with all the game's word combinations, subsequently run rails (or rake) db:seed. Once all the backend dependencies have been installed and deals have been created, run the rails s command from your machine to run the rails server.

In a separate Terminal window, go to the program's 'frontend' directory. Run npm install to install all the necessary JavaScript and React dependencies. Once complete, run npm start and you will be sent to the program's homepage on your default web browser.

## Usage

From the homepage, the user can click a link to play a quick game, a full game, or view the leaderboard.

In both the quick and full game modules, the user must score as many points as possible by creating as many words in the allotted time. Each word has a score that is equivalent to the length of the word, so a two-letter word is worth two points and a nine-letter word is worth nine points.

In the quick word game, the user must score as many points as possible within a minute from one letter grouping. In the full word game, the user must do the same but with ten possible letter groupings within five minutes. The user cannot use any letter tile more than once when forming anew word. When a user enters a word, the game will inform him whether the word is correct or incorrect.

Users with especially high scores can feel free to post their high scores to the app's leaderboard.


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/dmaster18/the_word_unscrambler_app/pulls. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
