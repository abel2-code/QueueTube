class AuthController < ApplicationController

    def login

        user = User.find_by(name: params[:name])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: {succes: false}
        end

    end

    def current_user
        if session[:user_id] 
            user = User.find(session[:user_id])
            render json: user
        else
            render json: {error: 'Nobody is logged in yet'}
        end
    end

    def log_out

        session[:user_id] = nil
        render json: {message: 'Log out'}

    end


end