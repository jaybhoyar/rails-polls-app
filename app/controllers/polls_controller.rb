class PollsController < ApplicationController
  
  def index
    @polls = Poll.all.order("created_at DESC")
  end

  def create
    if logged_in?
      @poll[:user_id] = current_user.id
      @poll = Poll.new(poll_params)
      if @poll.save
        render status: :ok, json: {notice: 'Poll created successfully'}
      else
        render status: :unprocessable_entity, json: {errors: @poll.errors.full_messages}
      end
    else
      redirect_to login_path
    end

  end

  private

  def poll_params
    params.require(:poll).permit(:question, :user_id)
  end

end
