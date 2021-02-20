class RemoveUserIdFromPoll < ActiveRecord::Migration[6.1]
  def change
    remove_column :polls, :user_id, :integer
  end
end
