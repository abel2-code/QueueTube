class VideosController < ApplicationController
    def index
        videos = Video.all
        render json: videos, include: [:list, :users]
    end

    def show
        video = Video.find(params[:id])
        render json: video, include: [:list, :users]
    end

    def create
        video = Video.create(video_params)
        render json: video, include: [:list, :users]
    end
    
    def video_params
        params.permit(:user_id, :list_id, :overview, :title, :youtube_url)
    end

end
