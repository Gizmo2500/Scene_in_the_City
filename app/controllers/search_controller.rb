class SearchController < ApplicationController
  def index
  	if params[:q]
  	resp = Typhoeus.get("https://data.sfgov.org/resource/yitu-d5am.json", :params => {:title => params[:q]})
  	json_resp = JSON.parse(resp.body)
    
  	@search = json_resp
    @movie = []
    @location = []
  else
  	@search = []
    @movie = []
    @location = []
  end
  end

  def show
  end
end
