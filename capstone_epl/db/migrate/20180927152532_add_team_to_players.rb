class AddTeamToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :team, :string
  end
end
