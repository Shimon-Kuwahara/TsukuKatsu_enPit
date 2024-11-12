Rails.application.routes.draw do
  resources :companies
  resources :recruitments do
    collection do
      get 'by_company_id', to: 'recruitments#by_company_id'
    end
  end

  get 'users', to: 'users#index'

  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }

  mount_devise_token_auth_for 'Company', at: 'auth_company', controllers: {
    registrations: 'auth/registrations_company'
  }
end
