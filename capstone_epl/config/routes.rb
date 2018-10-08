Rails.application.routes.draw do
  resources :nationalities
  resources :managers
  resources :players
  resources :teams do
    member do
      get 'players'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'home#index'
end
