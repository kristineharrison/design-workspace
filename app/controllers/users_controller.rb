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


  # PATCH /update/:id
  def update
    user = @current_user
    if user
      user.update(user_params)
      render json: user
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :email)
  end

end