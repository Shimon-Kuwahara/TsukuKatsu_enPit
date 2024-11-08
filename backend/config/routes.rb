Rails.application.routes.draw do
  resources :companies
  resources :recruitments

  get 'users', to: 'users#index'
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }

  mount_devise_token_auth_for 'Company', at: 'auth_company', controllers: {
    registrations: 'auth/registrations_company'
  }

end
