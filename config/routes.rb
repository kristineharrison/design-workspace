Rails.application.routes.draw do
  resources :projects
  resources :assets
  resources :users

  # Custom login
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Custom user
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  # Fallback
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
      
end