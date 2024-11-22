class ReviewsController < ApplicationController
  before_action :authenticate_user!
  before_action :is_matching_login_user, only: [:destroy]

  def create
    review = current_user.reviews.build(review_params)

    if review.save
      render json: {
        message: "Review successfully created",
        review: review
      }, status: :created
    else
      render json: {
        errors: review.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  def destroy
    if @review.destroy
      render json: {
        message: "Review successfully deleted"
      }
    else
      render json: {
        errors: @review.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:company_id, :job_description, :joining_reason_gap, 
                                   :work_life_balance, :work_environment, :selection_process, 
                                   :work_atmosphere, :intern_relations, :support)
  end

  def is_matching_login_user
    @review = current_user.reviews.find_by(id: params[:id])
    render json: { error: "この口コミを削除する権限がありません。" }, status: :forbidden if @review.nil?
  end
end
