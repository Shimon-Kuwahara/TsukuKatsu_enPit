class InternsController < ApplicationController
  # GET /interns
  def index
    interns = Intern.limit(12).order(updated_at: :desc)
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

  def show
    intern = Intern.includes(recruitment: :company).find(params[:id])

    render json: intern, include: {
      recruitment: {
        include: :company
      }
    }
  end
end
