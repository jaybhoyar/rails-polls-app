class VotesController < ApplicationController
  before_action :authenticate_user_using_x_auth_token, only: :create


  def create
    
  end
  
end
