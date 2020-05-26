class Api::V1::BooksController < ApplicationController
  def index
    @books = Book.all
    render :index
  end

  def show
    @book = Book.where("title LIKE ?", "%#{params[:id]}%").first
    render :show
  end
end
