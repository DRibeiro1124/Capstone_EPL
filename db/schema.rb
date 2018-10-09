# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_09_201541) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "managers", force: :cascade do |t|
    t.text "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "photo"
    t.string "country"
    t.string "full_name"
    t.string "club"
    t.string "flags"
  end

  create_table "nationalities", force: :cascade do |t|
    t.string "country"
    t.string "flag"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "players", force: :cascade do |t|
    t.integer "jersey_number"
    t.string "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "photo"
    t.string "country"
    t.string "team_logo"
    t.string "full_name"
    t.bigint "team_id"
    t.index ["team_id"], name: "index_players_on_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.string "home_kit"
    t.string "away_kit"
    t.string "third_kit"
    t.string "lead_partner_logo"
    t.string "club_partner_logo"
    t.string "stadium"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "logo"
    t.string "primary_color"
    t.string "secondary_color"
    t.string "stadium_name"
    t.text "stadium_info"
    t.bigint "managers_id"
    t.bigint "players_id"
    t.index ["managers_id"], name: "index_teams_on_managers_id"
    t.index ["players_id"], name: "index_teams_on_players_id"
  end

  add_foreign_key "players", "teams"
  add_foreign_key "teams", "managers", column: "managers_id"
  add_foreign_key "teams", "players", column: "players_id"
end
