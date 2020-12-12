class PlayersController < ApplicationController
  def index
    players = Player.all
    options = {
      include: []
    }
    render json: PlayerSerializer.new(players, options)
  end

  def show
    player = Player.find_by(id: params[:id])
    options = {
      include: []
    }
    render json: PlayerSerializer.new(player, options)
  end
end
