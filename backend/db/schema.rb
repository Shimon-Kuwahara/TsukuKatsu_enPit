# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_11_08_103406) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.string "website_url", null: false
    t.string "location", null: false
    t.string "email", null: false
    t.string "phone_number", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.json "tokens"
    t.string "logo_url"
    t.string "picture_url"
    t.index ["confirmation_token"], name: "index_companies_on_confirmation_token", unique: true
    t.index ["email"], name: "index_companies_on_email", unique: true
    t.index ["reset_password_token"], name: "index_companies_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_companies_on_uid_and_provider", unique: true
  end

  create_table "recruitments", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "company_id", null: false
    t.string "industry", null: false
    t.text "benefits", null: false
    t.text "job_description", null: false
    t.text "job_titles", null: false
    t.boolean "job_engineer", default: false, null: false
    t.boolean "job_designer", default: false, null: false
    t.boolean "job_sales", default: false, null: false
    t.boolean "job_planning", default: false, null: false
    t.boolean "job_marketing", default: false, null: false
    t.boolean "job_writer", default: false, null: false
    t.boolean "job_others", default: false, null: false
    t.text "skills_acquired", null: false
    t.string "wage", null: false
    t.text "salary_notes", null: false
    t.string "work_location", null: false
    t.string "min_work_period", null: false
    t.string "min_work_days", null: false
    t.string "min_work_hours", null: false
    t.string "commute_support", null: false
    t.text "required_skills", null: false
    t.text "welcome_skills", null: false
    t.string "promotion_system", null: false
    t.string "remote_policy", null: false
    t.text "selection_flow", null: false
    t.string "deadline", null: false
    t.text "welfare_benefits", null: false
    t.string "apply_url", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "last_name", null: false
    t.string "first_name", null: false
    t.string "last_name_kana", null: false
    t.string "first_name_kana", null: false
    t.integer "gender", null: false
    t.integer "university", null: false
    t.string "department", null: false
    t.integer "grade", null: false
    t.integer "graduation_year", null: false
    t.integer "graduation_month", null: false
    t.string "postal_code"
    t.integer "prefecture_id"
    t.string "city"
    t.string "phone_number"
    t.string "birth_place"
    t.string "nationality"
    t.date "birth_date"
    t.text "achievement"
    t.text "experience"
    t.string "github"
    t.string "portfolio"
    t.text "qualification"
    t.integer "desired_workplace"
    t.integer "desired_company_size"
    t.integer "desired_job"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "recruitments", "companies"
end
