json.extract! player, :id, :first_name, :last_name, :jersey_number, :position, :created_at, :updated_at
json.url player_url(player, format: :json)
