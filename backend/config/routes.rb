Rails.application.routes.draw do
  # 認証周りのルーティング
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }
  mount_devise_token_auth_for 'Company', at: 'auth_company', controllers: {
    registrations: 'auth/registrations_company'
  }

  # Userのルーティング
  get 'users', to: 'users#index'
  get '/mypage', to: 'users#mypage'

  # Companyのルーティング
  resources :companies

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
