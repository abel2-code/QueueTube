class CreateVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.string :youtube_url
      t.string :title
      t.string :overview
      t.references :list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
