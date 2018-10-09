class AddClubToManagers < ActiveRecord::Migration[5.2]
  def change
    add_column :managers, :club, :string
  end
end
