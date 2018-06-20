class User < ActiveRecord::Base
  has_many :posts

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :add_friends, Array

  def self.add(ids)
    ids = ids.empty? ? [0] :ids
    User.where("id IN (?)", ids)
  end

  def self.friend(ids)
    ids = ids.empty? ? [0] : ids
    User.where("id NOT IN (?)", ids).order
  end
end
