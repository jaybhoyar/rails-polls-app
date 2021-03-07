Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: %i[create]
  resource :sessions, only: %i[create destroy]
  resources :polls, only: %i[create index show]
  resource :votes, only: %i[create]
  
  root "home#index"
  get '*path', to: 'home#index', via: :all
end
