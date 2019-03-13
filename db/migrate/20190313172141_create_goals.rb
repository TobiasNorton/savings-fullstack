class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.string :name
      t.integer :target_amount
      t.integer :balance
      t.date :due_date

      t.timestamps
    end
  end
end
