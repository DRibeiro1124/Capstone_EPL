class AddPhotoToManagers < ActiveRecord::Migration[5.2]
  def change
    add_column :managers, :photo, :string
  end
end
