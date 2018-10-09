class RemoveLastNameFromManagers < ActiveRecord::Migration[5.2]
  def change
    remove_column :managers, :last_name, :string
  end
end
