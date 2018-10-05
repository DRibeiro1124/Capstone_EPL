class AddStadiumNameToTeams < ActiveRecord::Migration[5.2]
  def change
    add_column :teams, :stadium_name, :string
  end
end
