class ListsController < ApplicationController


    def index
        lists = List.all
        render json: lists, include: :videos
    end

    def show
        list = List.find(params[:id])
        render json: list, include: :videos
    end

    def update
        list = List.find(params[:id])
        list.update(list_params)
        render json: list, include: :videos
    end

    def destroy
        list = List.find(params[:id])
        list.destroy
    end

    def create
        list = List.create(list_params)
        render json: list, include: :videos
    end

    def list_params
        params.permit(:id, :title, :user_id, :list)
    end

end
