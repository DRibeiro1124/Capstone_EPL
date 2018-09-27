class AddCountryToManagers < ActiveRecord::Migration[5.2]
  def change
    add_column :managers, :country, :string
  end
end
