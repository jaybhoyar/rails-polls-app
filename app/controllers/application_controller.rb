class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def authenticate_user_using_x_auth_token
    user_username = request.headers["X-Auth-Username"]
    auth_token = request.headers["X-Auth-Token"].presence
    user = user_username && User.find_by_username(user_username)

    if user && auth_token &&
      ActiveSupport::SecurityUtils.secure_compare(
        user.authentication_token, auth_token
      )
      @current_user = user
    else
      render status: :unauthorized, json: {
        errors: ["Could not authenticate with the provided credentials"]
      }
    end
  end

  private
    def current_user
      @current_user
    end

end
