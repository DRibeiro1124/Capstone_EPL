class AddStadiumInfoToTeams < ActiveRecord::Migration[5.2]
  def change
    add_column :teams, :stadium_info, :text
  end
end
