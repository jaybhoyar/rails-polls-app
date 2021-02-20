class AddUserToPolls < ActiveRecord::Migration[6.1]
  def change
    add_reference :polls, :user, index: true
  end
end
