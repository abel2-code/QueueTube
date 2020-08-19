class ListsController < ApplicationController
    def index
        list = List.all
        render json: lists, include: :videos
    end
end
