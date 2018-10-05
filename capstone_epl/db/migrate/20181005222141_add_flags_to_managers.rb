class AddFlagsToManagers < ActiveRecord::Migration[5.2]
  def change
    add_column :managers, :flags, :string
  end
end
