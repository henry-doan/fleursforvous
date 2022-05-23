class Api::SubmissionsController < ApplicationController
  before_action :set_submission, only: [:show, :update, :destroy]
  
  def index
    render json: Submission.all
  end

  def show
    render json: @submission
  end

  def create
    @submission = Submission.new(submission_params)
    
    if @submission.save
      render json: @submission
    else
      render json: { errors: @submission.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @submission.update(submission_params)
      render json: @submission
    else
      render json: { errors: @submission.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @submission.destroy
    render json: { message: 'Submission deleted' }
  end

  private
    def set_submission
      @submission = Submission.find(params[:id])
    end

    def submission_params
      params.require(:submission).permit(:fullName, :email, :phone, :occasion, :dateNeeded, :timeNeeded, :colors, :priceRange, :flowers, :specialRequirements, :complete)
    end
end
