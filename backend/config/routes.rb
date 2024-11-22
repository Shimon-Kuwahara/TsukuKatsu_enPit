Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }
  mount_devise_token_auth_for 'Company', at: 'auth_company', controllers: {
    registrations: 'auth/registrations_company'
  }

  resources :recruitments do
    collection do
      get 'by_company_id', to: 'recruitments#by_company_id'
    end
  end
  resources :chat_rooms, only: [:create, :index, :show] do
    resources :messages, only: [:create]
  end
  resources :companies
  resources :reviews, only: [:create]

  get 'users', to: 'users#index'
  get '/mypage', to: 'users#mypage'
end
