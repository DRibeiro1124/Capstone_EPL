class AddFullNameToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :full_name, :string
  end
end
