class CompaniesController < ApplicationController
  before_action :set_company, only: %i[ show edit update destroy ]

  # GET /companies
  def index
    @companies = Company.all
    if @companies.empty?
      render json: { message: "No companies found" }, status: :not_found
    else
      render json: @companies
    end
  end 

  # GET /companies/1
  def show
    @company = Company.includes(reviews: :user).find_by(id: params[:id])
    if @company
      render json: {
        company: @company,
        reviews: @company.reviews.map do |review|
          review.as_json.merge({
            user: {
              last_name: review.user.last_name,
              first_name: review.user.first_name,
              university: review.user.university,
              department: review.user.department,
            }
          })
        end
      }
    else
      render json: { message: "Company not found" }, status: :not_found
    end
  end

  # GET /companies/new
  def new
    @company = Company.new
  end

  # GET /companies/1/edit
  def edit
  end

  # POST /companies
  def create
    @company = Company.new(company_params)

    if @company.save
      redirect_to @company, notice: "Company was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /companies/1
  def update
    if @company.update(company_params)
      redirect_to @company, notice: "Company was successfully updated.", status: :see_other
    else
      render :edit, status: :unprocessable_entity
    end
  end

  # DELETE /companies/1
  def destroy
    @company.destroy
    redirect_to companies_url, notice: "Company was successfully destroyed.", status: :see_other
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_company
      @company = Company.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def company_params
      params.require(:company).permit(:name, :description, :website_url, :location, :email, :phone_number)
    end
end
