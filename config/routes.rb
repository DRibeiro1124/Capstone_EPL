Rails.application.routes.draw do
  resources :nationalities
  resources :managers
  resources :players
  resources :teams do
    member do
      get 'players'
    end
  end
end
