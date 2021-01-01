class WordCollectionsController < ApplicationController
  def index
    trainerWords = WordCollection.all
    options = {
      include: []
    }
    render json: WordSerializer.new(trainerWords, options)
  end
end
