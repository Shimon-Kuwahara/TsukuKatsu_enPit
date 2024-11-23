class ApplicationsController < ApplicationController
  before_action :authenticate_user!

  def create
    application = current_user.applications.build(application_params)

    if review.save
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
    params.require(:review).permit(:recruitment_id)
  end
end
