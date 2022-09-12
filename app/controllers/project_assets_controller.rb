class ProjectAssetsController < ApplicationController

  # POST /project_assets
  def create
    projectasset = ProjectAsset.create!(projectasset_params)
    render json: projectasset.project_id, status: :created
  end

  # PATCH /project_assets/:id
  def update
    projectasset = find_projectasset
    if projectasset
      projectasset.update(project_params)
      render json: projectasset
    else
      render json: { error: "Project not found" }, status: :not_found
    end
  end

  private

  def projectasset_params
    params.permit(:project_id, :asset_id)
  end

  def find_projectasset
    ProjectAsset.find(params[:id])
  end
end