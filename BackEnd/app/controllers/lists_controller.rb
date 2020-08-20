class ListsController < ApplicationController


    def index

        render json: List.all
        
    end

    def show
        list = List.find(params[:id])
        render json: list, include: [:videos]
    end

    def update
        list = List.find(params[:id])
        list.update(list_params)
        render json: list
    end

    def destroy
        list = List.find(params[:id])
        list.destroy
    end

    def create
        list = List.create(list_params)
        render json: list
    end

    def list_params
        params.permit(:id, :title, :user_id)
    end

end
