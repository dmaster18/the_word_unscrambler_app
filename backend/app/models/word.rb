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
    capitalized_word_array = word_array.map{|word| word.upcase}
    capitalized_word_array
  end

  def add_all_words
    self.class.all_two_letter_words << self.two_letter_words
    self.class.all_two_letter_words = self.class.all_two_letter_words.uniq
    self.class.all_three_letter_words << self.three_letter_words
    self.class.all_three_letter_words = self.class.all_three_letter_words.uniq
    self.class.all_four_letter_words << self.four_letter_words
    self.class.all_four_letter_words = self.class.all_four_letter_words.uniq
    self.class.all_five_letter_words << self.five_letter_words
    self.class.all_five_letter_words = self.class.all_five_letter_words.uniq
    self.class.all_six_letter_words << self.six_letter_words
    self.class.all_six_letter_words = self.class.all_six_letter_words.uniq
    self.class.all_seven_letter_words << self.seven_letter_words
    self.class.all_seven_letter_words = self.class.all_seven_letter_words.uniq
    self.class.all_eight_letter_words << self.eight_letter_words
    self.class.all_eight_letter_words = self.class.all_eight_letter_words.uniq
    self.class.all_nine_letter_words << self.nine_letter_words
    self.class.all_nine_letter_words = self.class.all_nine_letter_words.uniq
  end

  def

  def sanitize_all_words
    self.two_letter_words = sanitize(self.two_letter_words)
    self.three_letter_words = sanitize(self.three_letter_words)
    self.four_letter_words = sanitize(self.four_letter_words)
    self.five_letter_words = sanitize(self.five_letter_words)
    self.six_letter_words = sanitize(self.six_letter_words)
    self.seven_letter_words = sanitize(self.seven_letter_words)
    self.eight_letter_words = sanitize(self.eight_letter_words)
    self.nine_letter_words = sanitize(self.nine_letter_words)
    add_all_words
    self
  end



  def all_words
    all_words = []
    all_words << two_letter_words
    all_words << three_letter_words
    all_words << four_letter_words
    all_words << five_letter_words
    all_words << six_letter_words
    all_words << seven_letter_words
    all_words << eight_letter_words
    all_words << nine_letter_words
    self.all_words = all_words.flatten
  end

end
