class AddTeamReferenceToPlayers < ActiveRecord::Migration[5.2]
  def change
    rename_column :players, :team, :team_logo
    add_reference :players, :team, foreign_key: true
  end
end
