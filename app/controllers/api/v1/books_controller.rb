class Api::V1::BooksController < ApplicationController
  def index
    @books = Book.all
    render :index
  end

  def show
    @book = Book.find_by(title: params[:id])
    render :show
  end
end
