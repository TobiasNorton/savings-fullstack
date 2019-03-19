class User < ApplicationRecord
  has_many :goals

  def self.from_auth_hash(payload)
    User.find_or_create_by(auth_sub: payload["sub"]) do |user|
      # This code will be called whenever we create a User for the first time.
    end
  end
end
