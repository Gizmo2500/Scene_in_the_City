require 'rails_helper'

RSpec.describe User, :type => :model do
  	
  	describe "User" do
  		it "should be User" do
  			expect(User).to be(:type => :model)
  		end
  	end

  
end
