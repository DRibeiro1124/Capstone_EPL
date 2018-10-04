json.extract! player, :id, :full_name, :jersey_number, :position, :created_at, :updated_at, :photo, :team
json.url player_url(player, format: :json)
