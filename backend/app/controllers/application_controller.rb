class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken
        include DeviseHackFakeSession # Rails7より、APIモードのようにセッションを使用しない場合にセッションへのアクセスがあるとエラーを発生させる機構が備わったことによるエラーです。deviseでは内部でセッションにアクセスしている箇所があるので当該エラーが発生する模様です。

        

        before_action do
                I18n.locale = :ja
        end
end
