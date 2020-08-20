class VideosController < ApplicationController
    def index
        videos = Video.all
        render json: videos
    end

    def create
        video = Video.create(video_params)
        render json: video
    end
    
    def video_params
        params.permit(:user_id, :list_id, :overview, :title, :youtube_url)
    end

end
