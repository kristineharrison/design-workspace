class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  # GET /users
  def index
    render json: @current_user
  end

  # GET /users/:id
  def show
    render json: @current_user
  end

  # CREATE /users
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :email, :avatar_data)
  end

end