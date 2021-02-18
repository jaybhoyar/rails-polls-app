Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "home#index"
  resources :users, only: %i[create]
  resource :sessions, only: %i[create]

  get '*path', to: 'home#index', via: :all
end
