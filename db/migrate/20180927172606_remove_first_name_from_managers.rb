class RemoveFirstNameFromManagers < ActiveRecord::Migration[5.2]
  def change
    remove_column :managers, :first_name, :string
  end
end
