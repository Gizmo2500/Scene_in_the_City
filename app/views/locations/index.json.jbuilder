json.array!(@locations) do |location|
  json.extract! location, :id, :movie, :location
  json.url location_url(location, format: :json)
end
