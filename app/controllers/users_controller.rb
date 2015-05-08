class UsersController < ApplicationController
  def index
  end

  def show
    if current_user
    @user = current_user
    @info = current_user.profiles
    else
      redirect_to new_user_session_path
    end  
  end

  def new
  end

  def edit
  end

  def create
  end

  def destroy
  end

  # private

  #   def content_params
  #     params.require(:profile).permit(:name, :origin, :location_pic, :comment, :user_id)
  #   end
end
