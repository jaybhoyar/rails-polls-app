class SessionsController < ApplicationController
  def create
    user = User.find_by(username: login_params[:username])
    if user.present? && user.authenticate(login_params[:password])
      render status: :ok, json: { auth_token: user.authentication_token, userId: user.id }
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
