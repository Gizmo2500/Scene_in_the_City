require 'rails_helper'

RSpec.describe User, :type => :model do
  	
  	# describe "User" do
  	# 	it "should be User Model" do
  	# 		expect(User).to be(:type => :model)
  	# 	end
  	# end

  	it "creates a user" do
  	@user = User.new
  	expect(@user).to be_instance_of User
  end
end
