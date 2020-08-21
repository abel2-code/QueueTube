Rails.application.routes.draw do
  resources :videos
  resources :lists
  resources :users
  post '/login', to: 'auth#login'
  get '/currentuser', to: 'auth#current_user'
  post '/logout', to: 'auth#log_out'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
