class ApplicationController < ActionController::API
        # Rails7よりAPIモードのようにセッションを使用しない場合にセッションへのアクセスがあると
        # エラーを発生させる機構が備わったことによるエラーです。
        # deviseでは内部でセッションにアクセスしている箇所があるので当該エラーが発生する模様です。
        include DeviseHackFakeSession
        include DeviseTokenAuth::Concerns::SetUserByToken

        before_action do
                I18n.locale = :ja
        end

        def configure_permitted_parameters
                devise_parameter_sanitizer.permit(:sign_up, keys: [
                        :email, :password, :last_name, :first_name, :last_name_kana, :first_name_kana,
                        :gender, :university_id, :department, :grade, :graduation_year, :graduation_month
                ])
        end

end
