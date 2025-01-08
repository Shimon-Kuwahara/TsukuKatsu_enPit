class ApplicationsController < ApplicationController
  def index
    applications = Application.includes(:user, :recruitment, :intern).all
    render json: applications.to_json(include: [:user, :recruitment, :intern])
  end
end
