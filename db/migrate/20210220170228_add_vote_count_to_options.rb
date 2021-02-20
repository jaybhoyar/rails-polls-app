class AddVoteCountToOptions < ActiveRecord::Migration[6.1]
  def change
    add_column :options, :vote_count, :integer,  default: 0
  end
end
