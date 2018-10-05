class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :home_kit
      t.string :away_kit
      t.string :third_kit
      t.string :lead_partner_logo
      t.string :club_partner_logo
      t.string :stadium
    
      t.timestamps
    end
  end
end
