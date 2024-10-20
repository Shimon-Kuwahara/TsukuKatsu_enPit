require "application_system_test_case"

class CompaniesTest < ApplicationSystemTestCase
  setup do
    @company = companies(:one)
  end

  test "visiting the index" do
    visit companies_url
    assert_selector "h1", text: "Companies"
  end

  test "should create company" do
    visit companies_url
    click_on "New company"

    fill_in "Description", with: @company.description
    fill_in "Detail link", with: @company.detail_link
    fill_in "Image", with: @company.image
    fill_in "Name", with: @company.name
    fill_in "Student info", with: @company.student_info
    fill_in "Student name", with: @company.student_name
    click_on "Create Company"

    assert_text "Company was successfully created"
    click_on "Back"
  end

  test "should update Company" do
    visit company_url(@company)
    click_on "Edit this company", match: :first

    fill_in "Description", with: @company.description
    fill_in "Detail link", with: @company.detail_link
    fill_in "Image", with: @company.image
    fill_in "Name", with: @company.name
    fill_in "Student info", with: @company.student_info
    fill_in "Student name", with: @company.student_name
    click_on "Update Company"

    assert_text "Company was successfully updated"
    click_on "Back"
  end

  test "should destroy Company" do
    visit company_url(@company)
    click_on "Destroy this company", match: :first

    assert_text "Company was successfully destroyed"
  end
end
