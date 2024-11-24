class ApplicationsController < ApplicationController
  before_action :authenticate_user!, only: [:create]
  before_action :authenticate_company!, only: [:index]

  def index
    company = current_company
    applications = company.applications.includes(:user, :recruitment)

    render json: applications.as_json(include: {
      user: { only: [:id, :name, :email] },
      recruitment: { only: [:id, :title, :industry] }
    })
  end

  def create
    application = current_user.applications.build(application_params)

    if application.save
      render json: {
        message: "Application successfully created",
        application: application
      }, status: :created
    else
      render json: {
        errors: application.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  private

  def application_params
    params.require(:application).permit(:recruitment_id)
  end
end
