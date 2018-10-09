class AddManagersToTeams < ActiveRecord::Migration[5.2]
  def change
    add_reference :teams, :managers, foreign_key: true
  end
end
