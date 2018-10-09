class RemoveLastNameFromPlayers < ActiveRecord::Migration[5.2]
  def change
    remove_column :players, :last_name, :string
  end
end
