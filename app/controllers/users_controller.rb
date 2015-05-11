class UsersController < ApplicationController
    before_action :authenticate_user!
  def index
    @location = current_user.locations
  end

  def show
    @user = current_user
  end

  def new
  end

  def edit
  end

  def create
  end

  def destroy
  end
end
