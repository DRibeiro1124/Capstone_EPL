class AddPlayersToTeams < ActiveRecord::Migration[5.2]
  def change
    add_reference :teams, :players, foreign_key: true
  end
end
