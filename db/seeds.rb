# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bench.create!(
  name: "Rincon Green",
  description: "the best bench you could sleep on in SOMA/South Beach",
  lat: 37.786355,
  lng: -122.391199)

Bench.create!(
  name: "App Academy",
  description: "a bench in the tenderloin... beware",
  lat: 37.781056,
  lng: -122.411455)

Bench.create!(
  name: "Local Brewery",
  description: "a good place to sleep if you like beer",
  lat: 37.776490,
  lng: -122.397160)

Bench.create!(
  name: "Union Square",
  description: "closest bench to all the shopping you can handle",
  lat: 37.787994,
  lng: -122.407437)

Bench.create!(
  name: "AT&T Park",
  description: "best seat in the ball park",
  lat: 37.778595,
  lng: -122.389270)
