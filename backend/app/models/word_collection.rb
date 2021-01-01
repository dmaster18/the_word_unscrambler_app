class WordCollection < ApplicationRecord
  has_many :words

  before_save :generate_word_collections

  serialize :two_word_collection, Array
  serialize :three_word_collection, Array
  serialize :four_word_collection, Array
  serialize :five_word_collection, Array
  serialize :six_word_collection, Array
  serialize :seven_word_collection, Array
  serialize :eight_word_collection, Array
  serialize :nine_word_collection, Array



  def generate_word_collections
    Word.all.each {|word|
      two_word_collection << word.two_letter_words
      two_word_collection = two_word_collection.uniq
      three_word_collection << word.three_letter_words
      three_word_collection = three_word_collection.uniq
      four_word_collection << word.four_letter_words
      four_word_collection = four_word_collection.uniq
      five_word_collection << word.five_letter_words
      five_word_collection = five_word_collection.uniq
      six_word_collection << word.six_letter_words
      six_word_collection = six_word_collection.uniq
      seven_word_collection << word.seven_letter_words
      seven_word_collection = seven_word_collection.uniq
      eight_word_collection << word.eight_letter_words
      eight_word_collection = eight_word_collection.uniq
      nine_word_collection << word.nine_letter_words
      nine_word_collection = nine_word_collection.uniq
    }
  end

end
