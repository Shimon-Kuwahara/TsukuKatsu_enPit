class RecruitmentsController < ApplicationController
  before_action :set_recruitment, only: %i[ show edit update destroy ]

  # GET /recruitments
  def index
    @recruitments = Recruitment.all
    if @recruitments.empty?
      render json: { message: "No recruitments found" }, status: :not_found
    else
      render json: @recruitments.to_json(
        include: {
          user: {
            only: [:last_name, :first_name, :grade, :department]
          },
          company: {
            only: [:name]
          }
        },
        except: [:created_at, :updated_at]
      )
    end
  end

  def by_company_id
    company = Company.find_by(id: params[:id])
    if company
      recruitments = company.recruitments
      render json: recruitments
    else
      render json: { error: "Company not found" }, status: :not_found
    end
  end

  # GET /recruitments/:id
  def show
    @recruitment = Recruitment.includes(:company).find_by(id: params[:id])
    if @recruitment
      render json: {
        recruitment: @recruitment,
        company: @recruitment.company
      }
    else
      render json: { message: "Recruitment not found" }, status: :not_found
    end
  end


  # GET /recruitments/new
  def new
    @recruitment = Recruitment.new
  end

  # GET /recruitments/1/edit
  def edit
  end

  # POST /recruitments
  def create
    @recruitment = Recruitment.new(recruitment_params)

    if @recruitment.save
      redirect_to @recruitment, notice: "Recruitment was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /recruitments/1
  def update
    if @recruitment.update(recruitment_params)
      redirect_to @recruitment, notice: "Recruitment was successfully updated.", status: :see_other
    else
      render :edit, status: :unprocessable_entity
    end
  end

  # DELETE /recruitments/1
  def destroy
    @recruitment.destroy
    redirect_to recruitments_url, notice: "Recruitment was successfully destroyed.", status: :see_other
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recruitment
      @recruitment = Recruitment.find(params[:id])
    end

    def recruitment_params
      params.require(:recruitment).permit(
        :title, :description, :company_id, :industry, :benefits, :job_description,
        :job_titles, :job_engineer, :job_designer, :job_sales, :job_planning,
        :job_marketing, :job_writer, :job_others, :skills_acquired, :wage,
        :salary_notes, :work_location, :min_work_period, :min_work_days,
        :min_work_hours, :commute_support, :required_skills, :welcome_skills,
        :promotion_system, :remote_policy, :selection_flow, :deadline,
        :welfare_benefits, :apply_url
      )
    end
end
