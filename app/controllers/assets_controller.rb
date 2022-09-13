class AssetsController < ApplicationController

  # GET /assets
  def index
    render json: @current_user.assets
  end

  # GET /assets/:id
  def show
    asset = find_asset
    render json: asset
  end

  # POST /assets
  def create
    asset = @current_user.assets.create!(asset_params)
    render json: asset, status: :created
  end

  # PATCH /assets/:id
  def update
    asset = find_asset
    if asset
      asset.update(asset_params)
      render json: asset
    else
      render json: { error: "Asset not found" }, status: :not_found
    end
  end

  # DELETE /assets/:id
  def destroy
    asset = find_asset
    asset.destroy
    head :no_content
  end

  private

  def asset_params
    params.permit(:title, :description, :tags, :source, :id, :asset)
  end

  def find_asset
    Asset.find(params[:id])
  end

end