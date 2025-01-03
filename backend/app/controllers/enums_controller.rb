# frozen_string_literal: true

# enum データをフロントエンドに提供する API。
class EnumsController < ApplicationController
  def user_enums
    render json: {
      gender: User.genders.map { |key, value| { key: key, value: value } },
      prefecture: User.prefectures.map { |key, value| { key: key, value: value } }
    }
  end

  def intern_enums
    render json: {
      industry: Intern.industries.map { |key, value| { key: key, value: value } },
      occupation: Intern.occupations.map { |key, value| { key: key, value: value } },
      department: Intern.departments.map { |key, value| { key: key, value: value } },
      grade: Intern.grades.map { |key, value| { key: key, value: value } }
    }
  end
end
