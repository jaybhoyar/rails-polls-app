class AddQuestionToPolls < ActiveRecord::Migration[6.1]
  def change
    add_column :polls, :question, :string
  end
end
