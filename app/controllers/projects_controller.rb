class ProjectsController < ApplicationController
  
  # GET /projects
  def index
    render json: @current_user.projects
  end

  # POST /projects
  def create
    project = @current_user.projects.create!(project_params)
    render json: project, status: :created
  end

  # PATCH /projects/:id
  def update
    project = find_project
    if project
      project.update(project_params)
      render json: project
    else
      render json: { error: "Project not found" }, status: :not_found
    end
  end

  # DELETE /projects/:id
  def destroy
    project = find_project
    project.destroy
    head :no_content
  end

  private

  def project_params
    params.permit(:name, :status, :summary)
  end

  def find_project
    Asset.find(params[:id])
  end
  
end
