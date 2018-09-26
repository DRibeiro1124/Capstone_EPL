require "application_system_test_case"

class TeamsTest < ApplicationSystemTestCase
  setup do
    @team = teams(:one)
  end

  test "visiting the index" do
    visit teams_url
    assert_selector "h1", text: "Teams"
  end

  test "creating a Team" do
    visit teams_url
    click_on "New Team"

    fill_in "Away Kit", with: @team.away_kit
    fill_in "Club Partner Logo", with: @team.club_partner_logo
    fill_in "Home Kit", with: @team.home_kit
    fill_in "Lead Partner Logo", with: @team.lead_partner_logo
    fill_in "Name", with: @team.name
    fill_in "Stadium", with: @team.stadium
    fill_in "Third Kit", with: @team.third_kit
    click_on "Create Team"

    assert_text "Team was successfully created"
    click_on "Back"
  end

  test "updating a Team" do
    visit teams_url
    click_on "Edit", match: :first

    fill_in "Away Kit", with: @team.away_kit
    fill_in "Club Partner Logo", with: @team.club_partner_logo
    fill_in "Home Kit", with: @team.home_kit
    fill_in "Lead Partner Logo", with: @team.lead_partner_logo
    fill_in "Name", with: @team.name
    fill_in "Stadium", with: @team.stadium
    fill_in "Third Kit", with: @team.third_kit
    click_on "Update Team"

    assert_text "Team was successfully updated"
    click_on "Back"
  end

  test "destroying a Team" do
    visit teams_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Team was successfully destroyed"
  end
end
