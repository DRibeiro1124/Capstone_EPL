json.extract! manager, :id, :full_name, :bio, :photo, :club, :country, :flags, :created_at, :updated_at
json.url manager_url(manager, format: :json)
