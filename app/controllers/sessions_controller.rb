class SessionsController < ApplicationController
  before_action :authenticate_user_using_x_auth_token, only: [:destroy]
  
  def create
    user = User.find_by(username: login_params[:username])
    if user&.authenticate(login_params[:password])
      render status: :ok, json: { 
        notice: 'Successfully logged in!',
        auth_token: user.authentication_token, userId: user.id
       }
    else
      render status: :unauthorized, json: {
        notice: 'Incorrect credentials, try again.'
      }
    end
  end

  def destroy
    @current_user = nil
  end
   
  private

    def login_params
      params.require(:login).permit(:username, :password)
    end
end
