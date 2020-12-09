class Word < ApplicationRecord
  before_save :all_words, :two_letter_words, :three_letter_words, :four_letter_words, :five_letter_words, :six_letter_words, :seven_letter_words, :eight_letter_words, :nine_letter_words, :sanitize_all_words

  serialize :two_letter_words, Array
  serialize :three_letter_words, Array
  serialize :four_letter_words, Array
  serialize :five_letter_words, Array
  serialize :six_letter_words, Array
  serialize :seven_letter_words, Array
  serialize :eight_letter_words, Array
  serialize :nine_letter_words, Array

  def sanitize(word_array)
    word_array.delete_if{|word| word == "" || word == nil}
    word_array
  end

  def sanitize_all_words
    sanitize(self.two_letter_words)
    sanitize(self.three_letter_words)
    sanitize(self.four_letter_words)
    sanitize(self.five_letter_words)
    sanitize(self.six_letter_words)
    sanitize(self.seven_letter_words)
    sanitize(self.eight_letter_words)
    sanitize(self.nine_letter_words)
    self
  end
  
  def all_words
    all_words << two_letter_words
    all_words << three_letter_words
    all_words << four_letter_words
    all_words << five_letter_words
    all_words << six_letter_words
    all_words << seven_letter_words
    all_words << eight_letter_words
    all_words << nine_letter_words
    all_words.flatten
    self.all_words = all_words
  end
  
end
