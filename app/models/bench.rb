class Bench < ActiveRecord::Base
  validates :name, :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    max_lat = bounds["northEast"]["lat"]
    min_lat = bounds["southWest"]["lat"]
    max_lng = bounds["northEast"]["lng"]
    min_lng = bounds["southWest"]["lng"]

    Bench.where("lat < :max_lat and lat > :min_lat and lng < :max_lng and lng > :min_lng",
        {max_lat: max_lat, min_lat: min_lat, max_lng: max_lng, min_lng: min_lng})
  end
end
