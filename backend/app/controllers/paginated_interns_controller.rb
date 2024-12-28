class PaginatedInternsController < ApplicationController
  # GET /paginated_interns
  def index
    page = params[:page].to_i.positive? ? params[:page].to_i : 1
    per_page = 12

    # 絞り込み条件を適用
    interns_scope = Intern.all
    interns_scope = interns_scope.where(industry: params[:industry]) if params[:industry].present?
    interns_scope = interns_scope.where(occupation: params[:occupation]) if params[:occupation].present?
    interns_scope = interns_scope.where(department: params[:department]) if params[:department].present?

    # 絞り込み後の総件数
    total_count = interns_scope.count

    # ページネーション用のデータを取得
    interns = interns_scope.order(created_at: :desc)
                           .offset((page - 1) * per_page)
                           .limit(per_page)

    if interns.empty?
      render json: { message: 'No interns found' }, status: :not_found
    else
      render json: {
        data: interns.as_json(
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
        ),
        total: total_count, # 絞り込み後の総件数
        per_page: per_page  # 固定値 12
      }, status: :ok
    end
  end
end
