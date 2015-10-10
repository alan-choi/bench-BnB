class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:currentMapBounds])
    render json: @benches
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render :index
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  private
  def bench_params
    params.require(:bench).permit(:name, :description, :lat, :lng)
  end
end
