Rails.application.routes.draw do
  root 'static_pages#index'
  match '*path', to: 'static_pages#index', via: :all
end
