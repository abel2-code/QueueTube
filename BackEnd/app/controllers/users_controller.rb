class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, include: [:lists, :videos]
    end
end
