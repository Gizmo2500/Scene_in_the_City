require 'rails_helper'

RSpec.describe Location, :type => :model do
  	

  it "creates a location" do #Verify that a new location can be created 
  	@location = Location.new
  	expect(@location).to be_instance_of Location
  end

  it "creates a location" do  #Verify that authentication works 
  	@location = Location.create(  user_id: "1",
  		movie: "Godzilla", location: "Golden Gate Bridge")
  	expect(@location).to_not be_valid 
  end

end

