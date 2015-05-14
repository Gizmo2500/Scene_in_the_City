require 'rails_helper'

RSpec.describe UsersController, :type => :controller do

	describe "index" do
		it "should assign @location" do
			user_locations = current_user.locations
			get :index
			expect(assign (:location)).to eq(user_locations)
		end
	end
end
