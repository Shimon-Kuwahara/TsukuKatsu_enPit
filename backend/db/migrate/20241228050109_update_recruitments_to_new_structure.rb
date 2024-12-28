class UpdateRecruitmentsToNewStructure < ActiveRecord::Migration[7.0]
  def change

    #
    # 2. 不要カラムの削除
    #
    remove_column :recruitments, :industry, :string
    remove_column :recruitments, :job_description, :text
    remove_column :recruitments, :job_engineer, :boolean
    remove_column :recruitments, :job_designer, :boolean
    remove_column :recruitments, :job_sales, :boolean
    remove_column :recruitments, :job_planning, :boolean
    remove_column :recruitments, :job_marketing, :boolean
    remove_column :recruitments, :job_writer, :boolean
    remove_column :recruitments, :job_others, :boolean
    remove_column :recruitments, :promotion_system, :string
    remove_column :recruitments, :remote_policy, :string
    remove_column :recruitments, :apply_url, :string
    remove_column :recruitments, :commute_support, :string
    remove_column :recruitments, :user_id, :bigint
    remove_column :recruitments, :deadline, :string
    remove_column :recruitments, :welfare_benefits, :text

    #
    # 3. 既存カラムのリネームや型変更
    #
    #   - wage( integer ) -> hourly_wage( integer )
    #   - job_description( text ) -> description( text ) へ集約
    #   - benefits( text ) -> other_informations( text ) へ集約
    #   - work_location( string ) -> work_style( string ) へ集約
    #   - min_work_period( string ) -> min_work_month( string ) へリネーム（型は同じ）
    #   - min_work_days( string ), min_work_hours( string ) -> 今回は一部のみ流用 (注意)
    #
    rename_column :recruitments, :wage, :hourly_wage
    rename_column :recruitments, :benefits, :other_informations
    rename_column :recruitments, :work_location, :work_style
    rename_column :recruitments, :min_work_period, :min_work_month

    #
    # 4. 新規カラムの追加
    #
    # occupation: enum を想定 -> DB では integer や string で定義
    add_column :recruitments, :occupation, :integer, null: false, default: 0

    # 新設: 新しい要件の最低週勤務時間
    add_column :recruitments, :min_weekly_hours, :string, null: false

    # 新設: 画像カラム
    add_column :recruitments, :image1, :string
    add_column :recruitments, :image2, :string
    add_column :recruitments, :image3, :string

    # 新設: ステータス (デフォルト true)
    add_column :recruitments, :status, :boolean, null: false, default: true

    #
    # 5. 既存カラムへの NOT NULL 制約・デフォルト変更
    #   - もし必要あれば、change_column_null / change_column_default を使う
    #
    change_column_null :recruitments, :title, false
    change_column_null :recruitments, :description, false
    change_column_null :recruitments, :skills_acquired, false
    change_column_null :recruitments, :hourly_wage, false
    change_column_null :recruitments, :salary_notes, false
    change_column_null :recruitments, :other_informations, false
    change_column_null :recruitments, :work_style, false
    change_column_null :recruitments, :selection_flow, false
    change_column_null :recruitments, :required_skills, false
    change_column_null :recruitments, :welcome_skills, false

    # 会社IDに外部キー制約を張る場合
    # 既に外部キーがある/ない によって書き方を変えます。
    # ここでは例として外部キーを貼り直すコードを示します。
    remove_foreign_key :recruitments, :companies, column: :company_id if foreign_key_exists?(:recruitments, :companies)
    add_foreign_key :recruitments, :companies, column: :company_id
  end
end
