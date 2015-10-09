class Bench < ActiveRecord::Base
  validates :name, :description, :lat, :lng, presence: true
end
