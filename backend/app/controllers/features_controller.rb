class FeaturesController < ApplicationController
  def index
    features = Feature.all

    render json: features.as_json(
      only: %i[id name]
    )
  end
end
