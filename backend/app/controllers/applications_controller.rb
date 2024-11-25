class ApplicationsController < ApplicationController
  before_action :authenticate_user!, only: [:create]
  before_action :authenticate_company!, only: [:index]

  def index
    company = current_company
    applications = company.applications.includes(:user, :recruitment)

    render json: applications.map { |application|
    {
      application: application,
      user: {
        id: application.user.id,
        name: application.user.last_name + application.user.first_name,
        email: application.user.email
      },
      recruitment: {
        id: application.recruitment.id,
        title: application.recruitment.title,
        industry: application.recruitment.industry
      }
    }
  }
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
