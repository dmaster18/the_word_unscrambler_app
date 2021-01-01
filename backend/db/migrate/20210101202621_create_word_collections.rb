class CreateWordCollections < ActiveRecord::Migration[6.0]
  def change
    create_table :word_collections do |t|
      t.string :name
      t.text :two_word_collection
      t.text :three_word_collection
      t.text :four_word_collection
      t.text :five_word_collection
      t.text :six_word_collection
      t.text :seven_word_collection
      t.text :eight_word_collection
      t.text :nine_word_collection

      t.timestamps
    end
  end
end
