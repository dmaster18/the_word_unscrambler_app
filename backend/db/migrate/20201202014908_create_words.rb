class CreateWords < ActiveRecord::Migration[6.0]
  def change
    create_table :words do |t|
      t.string :name
      t.text :two_letter_words
      t.text :three_letter_words
      t.text :four_letter_words
      t.text :five_letter_words
      t.text :six_letter_words
      t.text :seven_letter_words
      t.text :eight_letter_words
      t.text :nine_letter_words
      t.text :all_words
      t.text :all_two_letter_words
      t.text :all_three_letter_words
      t.text :all_four_letter_words
      t.text :all_five_letter_words
      t.text :all_six_letter_words
      t.text :all_seven_letter_words
      t.text :all_eight_letter_words
      t.text :all_nine_letter_words
      t.timestamps
    end
  end
end
