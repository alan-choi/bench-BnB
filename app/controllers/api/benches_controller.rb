class Api::BenchesController < ApplicationController
  def index
    if params[:min].nil?
      default_min = {min: 0}
      filter = params[:bounds].merge(default_min)
    else
      filter = params[:bounds]
      filter[:min] = params[:min]
    end
    @benches = Bench.in_bounds(filter)
    render json: @benches
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render json: @bench
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  private
  def bench_params
    params.require(:bench).permit(:name, :seating, :description, :lat, :lng)
  end
end
