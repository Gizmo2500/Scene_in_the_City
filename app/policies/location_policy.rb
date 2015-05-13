class LocationPolicy
	attr_reader :user, :location

	def initialize(user, location)
		@user = user
		@location = location
	end

	def show?
		location.user_id == user.try(:id)
	end

	def edit?
		show?
	end

	def update?
		show?
	end

	def destroy?
		show?
	end
end