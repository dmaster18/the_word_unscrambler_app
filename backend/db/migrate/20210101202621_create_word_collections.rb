class CreateWordCollections < ActiveRecord::Migration[6.0]
  def change
    create_table :word_collections do |t|
      t.string :name
      t.text :word_collection

      t.timestamps
    end
  end
end
