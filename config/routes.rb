Rails.application.routes.draw do
  namespace :api do
    namespace :v1, defaults: { format: :json } do
      resources :books, only: [:index, :show]
    end
  end
  root 'static_pages#index'
  match '*path', to: 'static_pages#index', via: :all
end
