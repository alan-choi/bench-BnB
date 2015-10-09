class Bench < ActiveRecord::Base
  validates :name, :description, :lat, :lng, presence: true

  def self.in_bounds
    
  end
end
