class profileInfo{
	
	constructor(image, title, name, gender, age, description, city, state, status, hasKids, wantsKids, religion, relationshipType){
		this.newImage = image;
		this.newTitle = title;
		this.newName = name;
		this.newGender = gender;
		this.newAge = age;
		this.newDescription = description;
		this.newCity = city;
		this.newState = state;
		this.newStatus = status;
		this.newHasKids = hasKids;
		this.newWantsKids = wantsKids;
		this.newReligion = religion;
		this.newRelationshipType = relationshipType;
	}
	
	get image()
	{
		return this.newImage;
	}
	
	set image(image)
	{
		this.newImage = image;
	}
	

	get title()
	{
		return this.newTitle;
	}
	
	set title(title)
	{
		this.newTitle = title;
	}
	
	get name()
	{
		return this.newName;
	}
	
	set name(name)
	{
		this.newName = name;
	}
	
	get gender()
	{
		return this.newGender;
	}
	
	set gender(gender)
	{
		this.newGender = gender;
	}
	
	get age()
	{
		return this.newAge;
	}
	
	set age(age)
	{
		this.newAge = age;
	}
	
	get description()
	{
		return this.newDescription;
	}
	
	set description(description)
	{
		this.newDescription = description;
	}
	
	get city()
	{
		return this.newCity;
	}
	
	set city(city)
	{
		this.newCity = city;
	}
	
	get state()
	{
		return this.newState;
	}
	
	set state(state)
	{
		this.newState = state;
	}
	
	get status()
	{
		return this.newStatus;
	}
	
	set status(status)
	{
		this.newStatus = status;
	}
	
	get hasKids()
	{
		return this.newHasKids;
	}
	
	set hasKids(hasKids)
	{
		this.newHasKids = hasKids;
	}
	
	get wantsKids()
	{
		return this.newWantsKids;
	}
	
	set wantsKids(wantsKids)
	{
		this.newWantsKids = wantsKids;
	}
	
	get religion()
	{
		return this.newReligion;
	}
	
	set religion(religion)
	{
		this.newReligion = religion;
	}
	
	get relationshipType()
	{
		return this.newRelationshipType;
	}
	
	set relationshipType(relationshipType)
	{
		this.newRelationshipType = relationshipType;
	}
}