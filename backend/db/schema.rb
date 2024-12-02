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

ActiveRecord::Schema[7.0].define(version: 2024_12_02_050617) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "chat_rooms", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "company_id"
    t.bigint "recruitment_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_chat_rooms_on_company_id"
    t.index ["recruitment_id"], name: "index_chat_rooms_on_recruitment_id"
    t.index ["user_id"], name: "index_chat_rooms_on_user_id"
  end

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
    t.string "logo_url", default: ""
    t.string "picture_url", default: ""
    t.index ["confirmation_token"], name: "index_companies_on_confirmation_token", unique: true
    t.index ["email"], name: "index_companies_on_email", unique: true
    t.index ["reset_password_token"], name: "index_companies_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_companies_on_uid_and_provider", unique: true
  end

  create_table "messages", force: :cascade do |t|
    t.bigint "chat_room_id"
    t.string "sender_type"
    t.bigint "sender_id"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["chat_room_id"], name: "index_messages_on_chat_room_id"
    t.index ["sender_type", "sender_id"], name: "index_messages_on_sender"
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
    t.integer "wage", null: false
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
    t.bigint "user_id"
    t.index ["user_id"], name: "index_recruitments_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "company_id", null: false
    t.text "job_description", null: false
    t.text "joining_reason_gap"
    t.text "work_life_balance"
    t.text "work_environment"
    t.text "selection_process"
    t.text "work_atmosphere"
    t.text "intern_relations"
    t.text "support"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_reviews_on_company_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
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
    t.integer "prefecture"
    t.date "birth_date"
    t.text "qualification"
    t.text "programing_experience"
    t.text "design_experience"
    t.text "internship_experience"
    t.text "achievement_url"
    t.text "past_efforts"
    t.text "future_goals"
    t.jsonb "desired_industry", default: [], null: false
    t.jsonb "desired_job", default: [], null: false
    t.jsonb "desired_job_location", default: [], null: false
    t.jsonb "desired_company_size", default: [], null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "chat_rooms", "companies"
  add_foreign_key "chat_rooms", "recruitments"
  add_foreign_key "chat_rooms", "users"
  add_foreign_key "messages", "chat_rooms"
  add_foreign_key "recruitments", "companies"
  add_foreign_key "recruitments", "users"
  add_foreign_key "reviews", "companies"
  add_foreign_key "reviews", "users"
end
