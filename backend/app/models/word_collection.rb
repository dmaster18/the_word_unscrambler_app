class WordCollection < ApplicationRecord

#Ensures generate_word_collections runs before instance of it is saved
  before_save :generate_word_collections

  serialize :two_word_collection, Array
  serialize :three_word_collection, Array
  serialize :four_word_collection, Array
  serialize :five_word_collection, Array
  serialize :six_word_collection, Array
  serialize :seven_word_collection, Array
  serialize :eight_word_collection, Array
  serialize :nine_word_collection, Array

#Adds all two- through nine-letter words to collections from all letter groupings
  def generate_word_collections
    Word.all.each {|word|
      self.two_word_collection << word.two_letter_words
      self.three_word_collection << word.three_letter_words
      self.four_word_collection << word.four_letter_words
      self.five_word_collection << word.five_letter_words
      self.six_word_collection << word.six_letter_words
      self.seven_word_collection << word.seven_letter_words
      self.eight_word_collection << word.eight_letter_words
      self.nine_word_collection << word.nine_letter_words
    }
    self.two_word_collection = self.two_word_collection.uniq.flatten.sort
    self.three_word_collection = self.three_word_collection.uniq.flatten.sort
    self.four_word_collection = self.four_word_collection.uniq.flatten.sort
    self.five_word_collection = self.five_word_collection.uniq.flatten.sort
    self.six_word_collection = self.six_word_collection.uniq.flatten.sort
    self.seven_word_collection = self.seven_word_collection.uniq.flatten.sort
    self.eight_word_collection = self.eight_word_collection.uniq.flatten.sort
    self.nine_word_collection = self.nine_word_collection.uniq.flatten.sort
    self
  end

end
