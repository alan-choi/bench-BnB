class Bench < ActiveRecord::Base
  validates :name, :description, :lat, :lng, :seating, presence: true

  def self.in_bounds(filter)
    puts "FILTER IS #{filter}"
    max_lat = filter["northEast"]["lat"]
    min_lat = filter["southWest"]["lat"]
    max_lng = filter["northEast"]["lng"]
    min_lng = filter["southWest"]["lng"]
    min_seats = filter["min"]
    Bench.where("lat < :max_lat and lat > :min_lat and lng < :max_lng and lng > :min_lng and seating > :min_seats",
        {max_lat: max_lat, min_lat: min_lat, max_lng: max_lng, min_lng: min_lng, min_seats: min_seats })
  end
end
