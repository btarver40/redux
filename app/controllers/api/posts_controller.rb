class Api::PostsController < ApplicationController
  def index
    render json: User.friend(current_user.add_friends)
  end

  def my_friend
    # listing out all of the friends
    render json: User.add(current_user.add_friends)
  end

  def update
    current_user.add_friends << params[:id].to_i
    current_user.save
  end
end
