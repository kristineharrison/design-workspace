Rails.application.routes.draw do
  resources :projects
  resources :assets
  resources :users
  # route to test configuration
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
      
end