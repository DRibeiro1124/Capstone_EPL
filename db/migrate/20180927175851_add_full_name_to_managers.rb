class AddFullNameToManagers < ActiveRecord::Migration[5.2]
  def change
    add_column :managers, :full_name, :string
  end
end
