Rails.application.routes.draw do
  # route to test configuration
  get '/hello', to: 'application#hello_world'
end