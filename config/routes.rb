Rails.application.routes.draw do
  scope :admin do
    resources :nationalities
    resources :managers
    resources :players
    resources :teams do
      member do
        get 'players'
      end
    end
  end

  get "*path", to: "application#fallback_index_html", constraints: -> (request) do
    !request.xhr? && request.format.html?
  end
end
