class AddPhotoToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :photo, :string
    add_column :players, :country, :string
  end
end
