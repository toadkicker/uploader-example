class UploadsController < ApplicationController
  # before_action :authenticate_admin

  def create
    uploader = ImageUploader.new(:cache)
    @file = uploader.upload(upload_params[:file])
    render json: @file
  end

  protected

  def upload_params
    params.require(:upload).permit(:file)
  end
end
