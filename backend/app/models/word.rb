class Word < ApplicationRecord

#Word Class Variables
  @@all_two_letter_words = []
  @@all_three_letter_words = []
  @@all_four_letter_words = []
  @@all_five_letter_words = []
  @@all_six_letter_words = []
  @@all_seven_letter_words = []
  @@all_eight_letter_words = []
  @@all_nine_letter_words = []

#Word Class Methods housing Word Class Variables
  def self.all_two_letter_words=(all_two_letter_words)
    @@all_two_letter_words << all_two_letter_words
  end

  def self.all_two_letter_words
    @@all_two_letter_words
  end

  def self.all_three_letter_words=(all_three_letter_words)
    @@all_three_letter_words << all_three_letter_words
  end

  def self.all_three_letter_words
    @@all_three_letter_words
  end

  def self.all_four_letter_words=(all_four_letter_words)
    @@all_four_letter_words << all_four_letter_words
  end

  def self.all_four_letter_words
    @@all_four_letter_words
  end

  def self.all_five_letter_words=(all_five_letter_words)
    @@all_five_letter_words << all_five_letter_words
  end

  def self.all_five_letter_words
    @@all_five_letter_words
  end

  def self.all_six_letter_words=(all_six_letter_words)
    @@all_six_letter_words  << all_six_letter_words
  end

  def self.all_six_letter_words
    @@all_six_letter_words
  end

  def self.all_seven_letter_words=(all_seven_letter_words)
    @@all_seven_letter_words << all_seven_letter_words
  end

  def self.all_seven_letter_words
    @@all_seven_letter_words
  end

  def self.all_eight_letter_words=(all_eight_letter_words)
    @@all_eight_letter_words << all_eight_letter_words
  end

  def self.all_eight_letter_words
    @@all_eight_letter_words
  end

  def self.all_nine_letter_words=(all_nine_letter_words)
    @@all_nine_letter_words << all_nine_letter_words
  end

  def self.all_nine_letter_words
    @@all_nine_letter_words
  end

#Before saving words, execute all these instance methods
  before_save :all_words, :two_letter_words, :three_letter_words, :four_letter_words, :five_letter_words, :six_letter_words, :seven_letter_words, :eight_letter_words, :nine_letter_words, :sanitize_all_words

#For ActiveRecord, faciliate conversion of Text type to Array type
  serialize :two_letter_words, Array
  serialize :three_letter_words, Array
  serialize :four_letter_words, Array
  serialize :five_letter_words, Array
  serialize :six_letter_words, Array
  serialize :seven_letter_words, Array
  serialize :eight_letter_words, Array
  serialize :nine_letter_words, Array

#Instance method that removes blank words and capitalizes all characts of words stored in the array
  def sanitize(word_array)
    word_array.delete_if{|word| word == "" || word == nil}
    capitalized_word_array = word_array.map{|word| word.upcase}
    capitalized_word_array
  end

#Instance method that adds words from a given letter combination to Word class variables and removes any duplicate words
  #def aggregate_and_unique_all_words(all_word_array_type, word_array_type)
  #  all_word_array_type << self.word_array_type
  #  all_word_array_type = all_word_array_type.uniq
  #end

#Instance method that adds words from a given letter combination to Word class variables and removes any duplicate words
  def self.add_all_created_words
    self.all.each {|word|
      word.class.all_two_letter_words = word.two_letter_words
      word.class.all_two_letter_words = word.class.all_two_letter_words.uniq
      word.class.all_three_letter_words = word.three_letter_words
      word.class.all_three_letter_words = word.class.all_three_letter_words.uniq
      word.class.all_four_letter_words = word.four_letter_words
      word.class.all_four_letter_words = word.class.all_four_letter_words.uniq
      word.class.all_five_letter_words = word.five_letter_words
      word.class.all_five_letter_words = word.class.all_five_letter_words.uniq
      word.class.all_six_letter_words = word.six_letter_words
      word.class.all_six_letter_words = word.class.all_six_letter_words.uniq
      word.class.all_seven_letter_words = word.seven_letter_words
      word.class.all_seven_letter_words = word.class.all_seven_letter_words.uniq
      word.class.all_eight_letter_words = word.eight_letter_words
      word.class.all_eight_letter_words = word.class.all_eight_letter_words.uniq
      word.class.all_nine_letter_words = word.nine_letter_words
      word.class.all_nine_letter_words = word.class.all_nine_letter_words.uniq
    }
  end


  def add_all_words
    self.class.all_two_letter_words = self.two_letter_words
    self.class.all_two_letter_words = self.class.all_two_letter_words.uniq
    self.class.all_three_letter_words = self.three_letter_words
    self.class.all_three_letter_words = self.class.all_three_letter_words.uniq
    self.class.all_four_letter_words = self.four_letter_words
    self.class.all_four_letter_words = self.class.all_four_letter_words.uniq
    self.class.all_five_letter_words = self.five_letter_words
    self.class.all_five_letter_words = self.class.all_five_letter_words.uniq
    self.class.all_six_letter_words = self.six_letter_words
    self.class.all_six_letter_words = self.class.all_six_letter_words.uniq
    self.class.all_seven_letter_words = self.seven_letter_words
    self.class.all_seven_letter_words = self.class.all_seven_letter_words.uniq
    self.class.all_eight_letter_words = self.eight_letter_words
    self.class.all_eight_letter_words = self.class.all_eight_letter_words.uniq
    self.class.all_nine_letter_words = self.nine_letter_words
    self.class.all_nine_letter_words = self.class.all_nine_letter_words.uniq
  end

#Sanitizes all words and adds all words to class variables
  def sanitize_all_words
    self.two_letter_words = sanitize(self.two_letter_words)
    self.three_letter_words = sanitize(self.three_letter_words)
    self.four_letter_words = sanitize(self.four_letter_words)
    self.five_letter_words = sanitize(self.five_letter_words)
    self.six_letter_words = sanitize(self.six_letter_words)
    self.seven_letter_words = sanitize(self.seven_letter_words)
    self.eight_letter_words = sanitize(self.eight_letter_words)
    self.nine_letter_words = sanitize(self.nine_letter_words)
    self
  end

#Adds all two-letter through nine-letter words to self.all_words array
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
    #self.add_all_words
    self.all_words = all_words.flatten
  end

end
