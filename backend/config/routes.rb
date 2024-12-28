Rails.application.routes.draw do
  # 認証周りのルーティング
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }
  mount_devise_token_auth_for 'Company', at: 'auth_company', controllers: {
    registrations: 'auth/registrations_company'
  }

  # Userのルーティング
  resources :users, only: %i[index update]
  get '/user_enums', to: 'enums#user_enums'
  get '/mypage', to: 'users#mypage'

  # Companyのルーティング
  resources :companies

  # Internのルーティング
  resources :interns, only: %i[index]
  resources :paginated_interns, only: %i[index]

  # その他のルーティング
  resources :recruitments do
    collection do
      get 'by_company_id', to: 'recruitments#by_company_id'
    end
  end
  resources :chat_rooms, only: %i[create index show] do
    resources :messages, only: [:create]
  end

  resources :applications, only: %i[create index]

  resources :reviews, only: %i[create destroy]
end
