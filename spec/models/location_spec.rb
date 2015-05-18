require 'rails_helper'

RSpec.describe Location, :type => :model do
    

  it "creates a location" do 
    @location = Location.new
    expect(@location).to be_instance_of Location
  end

  it "shouldn't create a location" do  
    @location = Location.create(  user_id: "1",
      movie: "Godzilla", location: "Golden Gate Bridge")
    expect(@location).to_not be_valid 
  end
  

end

