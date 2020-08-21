class UsersController < ApplicationController
    before_action :define_current_user

    def index
        users = User.all
<<<<<<< HEAD
        render json: users, include: [:lists, :videos]
=======
        render json: users, include: :lists
>>>>>>> ab61789634ccef99976b88b8e5f53b555f083133
    end

    def create
        user = User.create(user_params)
        session[:user_id] = user.id 
        render json: user, include: [:lists, :videos]
    end

    def show
        render json: current_user, include: [:lists, :videos]
    end

    def update
        current_user.update(user_params)
        render json: current_user, include: [:lists, :videos]
    end

    def destroy
        current_user.destroy
    end

    def user_params
        params.permit(:name, :email, :password, :id)
    end
    
    def define_current_user
        if params[:id]
            @current_user = User.find(params[:id])
        else
            @current_user = User.new
        end
    end
    
    def current_user
        @current_user
    end




end
