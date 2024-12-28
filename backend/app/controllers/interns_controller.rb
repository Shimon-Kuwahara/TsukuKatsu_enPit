class InternsController < ApplicationController
  # GET /interns
  def index
    interns = Intern.limit(12).order(created_at: :desc)
    if interns.empty?
      render json: { message: 'No internts found' }, status: :not_found
    else
      # as_json で表示したいカラムを指定
      render json: interns.as_json(
        only: %i[
          id
          nickname
          department
          grade
          company_name
          intern_overview
          catchphrase
          hourly_wage
          weekly_hours
          work_duration
          industry
          occupation
        ]
      ), status: :ok
    end
  end
end
