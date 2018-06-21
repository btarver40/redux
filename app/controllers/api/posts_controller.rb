class Api::PostsController < ApplicationController
  def index
    # render json: User.friend(current_user.add_friends)
    render json: User.all
  end

  def add_friends
    # listing out all of the friends
    render json: User.add(current_user.add_friends)
  end

  def update
    current_user.add_friends << params[:id].to_i
    current_user.save
  end
end
