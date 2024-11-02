require "application_system_test_case"

class RecruitmentsTest < ApplicationSystemTestCase
  setup do
    @recruitment = recruitments(:one)
  end

  test "visiting the index" do
    visit recruitments_url
    assert_selector "h1", text: "Recruitments"
  end

  test "should create recruitment" do
    visit recruitments_url
    click_on "New recruitment"

    fill_in "Description", with: @recruitment.description
    fill_in "Title", with: @recruitment.title
    click_on "Create Recruitment"

    assert_text "Recruitment was successfully created"
    click_on "Back"
  end

  test "should update Recruitment" do
    visit recruitment_url(@recruitment)
    click_on "Edit this recruitment", match: :first

    fill_in "Description", with: @recruitment.description
    fill_in "Title", with: @recruitment.title
    click_on "Update Recruitment"

    assert_text "Recruitment was successfully updated"
    click_on "Back"
  end

  test "should destroy Recruitment" do
    visit recruitment_url(@recruitment)
    click_on "Destroy this recruitment", match: :first

    assert_text "Recruitment was successfully destroyed"
  end
end
