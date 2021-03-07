class VotesController < ApplicationController
  before_action :authenticate_user_using_x_auth_token, only: :create

  def create
    poll = Poll.find(params[:vote][:poll_id])
    unless already_voted?(poll)
        vote = Vote.new(vote_params)
        vote.user_id = current_user.id
      if vote.save
        option = poll.options.detect{ |option| option.id == vote.option_id  }
        option.increment!(:vote_count)
        render status: :ok, json: { notice: "You have voted successfully" }
      else
        render status: :unprocessable_entity, json: { errors: vote.errors.full_messages }
      end
    else
      render status: :bad_request, json: { notice: "You have already voted" }
    end
    
  end

  private
    def already_voted?(poll)
      poll.voter_ids.include?(current_user.id)
    end

    def vote_params
      params.required(:vote).permit(:poll_id, :option_id)
    end
  
end
