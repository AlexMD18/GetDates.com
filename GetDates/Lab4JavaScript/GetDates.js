// JavaScript Document
		var likeBtn;
		var dislikeBtn;
		var profileArray = []
		var profiles = [];
var likedArray = [];
var likedArrayDis = [];
		var removedDates = [];
		
		class profileInfo{
			constructor(profImage, title, name, gender, age, description, city, state, status, hasKids, wantsKids, religion, relationshipType)
			{
				this.profImage = profImage;
				this.title = title;
				this.name = name;
				this.gender = gender;
				this.age = age;
				this.description = description;
				this.city = city;
				this.state = state;
				this.status = status;
				this.hasKids = hasKids;
				this.wantsKids = wantsKids;
				this.religion = religion;
				this.relationshipType = relationshipType;
			}
		}
			
			//Inital database of profiles
			profileArray[0] = new profileInfo("Lab3-Images/Men/aquaman.jpg", "Aquaman", "Aurther Curry", "Male", "31", "I like to swim.", "Atlantis", "Maine", "Single", "No", "No", "Agnostic", "Long-Term");
			profileArray[1] = new profileInfo("Lab3-Images/Men/black-panther.jpg", "Black_Panther", "T'Challa", "Male", 28, "Wakanda Forever!", "Wakanda", "South Carolina", "Single", "No", "No", "Panther-Cult", "Long-Term");
			profileArray[2] = new profileInfo("Lab3-Images/Women/Diana Prince.jpg", "Wonder_Woman", "Diana Prince", "Female", 28, "I will fight for those who cannot fight for themselves.", "Themyscira", "Texas", "Single", "No", "No", "Anglican", "Long-Term");
			profileArray[3] = new profileInfo("Lab3-Images/Men/Deadpool.jpg", "Deadpool", "Wade Wilson", "Male", 30, "All the dinosaurs feared the T-Rex.", "Los Angeles", "California", "Taken", "No", "Yes", "Athiest", "Casual");
			profileArray[4] = new profileInfo("Lab3-Images/Women/harley.jpg", "Hello_Harley", "Harley Quinn", "Female", 25, "You wanna be my new puddin?", "Gothem", "New York", "Taken", "No", "No", "Athiest", "Casual");
			profileArray[5] = new profileInfo("Lab3-Images/Women/wasp.jpg", "The_Wasp", "Janet Van Dyne", "Female", 26, "I think insects are interesting.", "San Fransisco", "California", "Single", "No", "No", "Athiest", "Short-Term");
			profileArray[6] = new profileInfo("Lab3-Images/Men/james-rhodes.jpg", "WarMachine", "Col. James Rhodes", "Male", 52, "I'm in the army and I know Iron Man.", "Los Angeles", "California", "Single", "No", "Yes", "Baptist", "Long-Term");
			profileArray[7] = new profileInfo("Lab3-Images/Men/loki.jpg", "LokiGod", "Loki Odenson", "Male", 99, "I'm a trickster!", "Asgard", "Nevada", "Single", "No", "No", "Nordic", "Casual");
			profileArray[8] = new profileInfo("Lab3-Images/Women/nebula.jpg", "Nebula", "Nebula Zen Whoberi Ben Titan", "Female", 38, "You can't handle me!", "Zehoberei", "Oklahoma", "Taken", "No", "No", "Athiest", "Casual");
			profileArray[9] = new profileInfo("Lab3-Images/Women/jane.jpg", "Foster_Jane", "Jane Foster", "Female", 26, "Im a scientist in Arizona looking for some new friends.", "Pheonix", "Arizona", "Taken", "No", "Yes", "Nordic", "Just Friends");
			profileArray[10] = new profileInfo("Lab3-Images/Men/bruce-banner.jpg", "Hulk", "Bruce Banner", "Male", 48, "Scientist who reguarly attends anger managment classes.", "Dayton", "Ohio", "Single", "No", "No", "Catholic", "Long-Term");
			profileArray[11] = new profileInfo("Lab3-Images/Men/steve-rogers.jpg", "Captain_America", "Steve Rogers", "Male", 97, "I have been around a bit.", "New York City", "New York", "Taken", "No", "Yes", "Christian", "Just Friends");
			profileArray[12] = new profileInfo("Lab3-Images/Men/thor.jpg", "Thunder-Thor", "Thor Odenson", "Male", 99, "I am the god of thunder!", "Asgard", "Nevada", "Taken", "No", "No", "Nordic", "Just Friends");
			profileArray[13] = new profileInfo("Lab3-Images/Women/Gamora.jpg", "Gamora_T", "Gamora Zen Whoberi Ben Titan", "Female", 29, "I travel around space with my friends.", "Zehoberei", "Oklahoma", "Taken", "No", "Yes", "Athiest", "Just Friends");
			profileArray[14] = new profileInfo("Lab3-Images/Women/gwen.jpg", "Gwen-Chem", "Gwen Stacy", "Female", 18, "I'm a undergrad freshman chemist in NYC.", "New York City", "New York", "Single", "No", "No", "Catholic", "Short-Term");
			profileArray[15] = new profileInfo("Lab3-Images/Men/dr-strange.jpg", "Dr_Strange", "Dr. Stephen Strange", "Male", 42, "I have my MD and I learn more about the fabrics of time everyday.", "New York City", "New York", "Single", "No", "No", "Buddhist", "Just Friends");
			profileArray[16] = new profileInfo("Lab3-Images/Men/peter-parker.jpg", "Spiderman", "Peter Parker", "Male", 18, "I'm a highschool senior in NYC.", "New York City", "New York", "Single", "No", "Yes", "Athiest", "Long-Term");
			profileArray[17] = new profileInfo("Lab3-Images/Women/pepper.jpg", "P-Pots08", "Pepper Potts", "Female", 40, "Mom of one, married to Iron-Man just looking for some friends.", "Malibu", "California", "Taken", "Yes", "No", "None", "Just Friends");
			profileArray[18] = new profileInfo("Lab3-Images/Women/Scarlet-Witch.jpg", "Scarlet-Witch", "Wanda Eisenhardt", "Female", 26, "I study the wiken arts.", "Chicago", "Illinois", "Taken", "No", "No", "Agnosic", "Just Friends");
			profileArray[19] = new profileInfo("Lab3-Images/Men/killmonger.jpg", "E_Killmonger", "Erik Killmonger", "Male", 26, "Looking for where I truely belong.", "Oakland", "California", "Single", "No", "No", "Athiest", "Short-Term");
			profileArray[20] = new profileInfo("Lab3-Images/Women/vanessa.jpg", "Vanessa_Car", "Vanessa Carlysle", "Female", 25, "Looking for something causual with my husband.", "Los Angeles", "California", "Taken", "No", "Yes", "Athiest", "Casual");
			profileArray[21] = new profileInfo("Lab3-Images/Men/starlord.jpg", "Starlord", "Peter Quill", "Male", 27, "The best thief in all the universe.", "St. Charles", "Missouri", "Taken", "No", "Yes", "Agnostic", "Just Friends");
			profileArray[22] = new profileInfo("Lab3-Images/Women/mera.jpg", "Mera_Swims", "Mera", "Female", 33, "I love marine life.", "Atlantis", "Maine", "Taken", "No", "Yes", "Agnostic", "Just Friends");
			profileArray[23] = new profileInfo("Lab3-Images/Men/bucky.jpg", "Bucky_B", "Bucky Barnes", "Male", 98, "I need someone to help me find who I am.", "Latham", "New York", "Single", "No", "No", "Christian", "Long-Term");
			profileArray[24] = new profileInfo("Lab3-Images/Women/natasha.jpg", "Black_Widow", "Natasha Romanoff", "Female", 36, "Loyal, Fiesty, Smart", "Moscow", "Alaska", "Single", "No", "No", "Russian Orthodox", "Long-Term");
			profileArray[25] = new profileInfo("Lab3-Images/Men/tony-stark.jpg", "Iron-Man", "Tony Stark", "Male", 40, "Millionare tech guy. Also, Iron Man", "Malibu", "California", "Taken", "Yes", "No", "None", "Just Friends");
			

		window.onload = function () {
			
			addProfile();
			findUser();
            updateProfile();
			
			if(window.localStorage.getItem("Profile0") == null)
			{
				loadProfiles();
			}
			
			//foreach key value in the local storage
			var key;
			for(key in localStorage)
			{
                //if the name in value begins with the string "Profile", then retreve the object and push it onto the profile array.
                if (key.substring(0, 7) == "Profile" || key == "saveNewProf" || key == "updatedProfile")
				{
	    			var profileString = window.localStorage.getItem(key);
					var value = JSON.parse(profileString);
					profiles.push(value);
                }
            }	
			
			
            ddl_Dates();
		
		//Loads all the arrays into local storage
		function loadProfiles(){
			window.localStorage.setItem("Profile0", JSON.stringify(profileArray[0]));
			window.localStorage.setItem("Profile1", JSON.stringify(profileArray[1]));
			window.localStorage.setItem("Profile2", JSON.stringify(profileArray[2]));
			window.localStorage.setItem("Profile3", JSON.stringify(profileArray[3]));
			window.localStorage.setItem("Profile4", JSON.stringify(profileArray[4]));
			window.localStorage.setItem("Profile5", JSON.stringify(profileArray[5]));
			window.localStorage.setItem("Profile6", JSON.stringify(profileArray[6]));
			window.localStorage.setItem("Profile7", JSON.stringify(profileArray[7]));
			window.localStorage.setItem("Profile8", JSON.stringify(profileArray[8]));
			window.localStorage.setItem("Profile9", JSON.stringify(profileArray[9]));
			window.localStorage.setItem("Profile10", JSON.stringify(profileArray[10]));
			window.localStorage.setItem("Profile11", JSON.stringify(profileArray[11]));
			window.localStorage.setItem("Profile12", JSON.stringify(profileArray[12]));
			window.localStorage.setItem("Profile13", JSON.stringify(profileArray[13]));
			window.localStorage.setItem("Profile14", JSON.stringify(profileArray[14]));
			window.localStorage.setItem("Profile15", JSON.stringify(profileArray[15]));
			window.localStorage.setItem("Profile16", JSON.stringify(profileArray[16]));
			window.localStorage.setItem("Profile17", JSON.stringify(profileArray[17]));
			window.localStorage.setItem("Profile18", JSON.stringify(profileArray[18]));
			window.localStorage.setItem("Profile19", JSON.stringify(profileArray[19]));
			window.localStorage.setItem("Profile20", JSON.stringify(profileArray[20]));
			window.localStorage.setItem("Profile21", JSON.stringify(profileArray[21]));
			window.localStorage.setItem("Profile22", JSON.stringify(profileArray[22]));
			window.localStorage.setItem("Profile23", JSON.stringify(profileArray[23]));
			window.localStorage.setItem("Profile24", JSON.stringify(profileArray[24]));
			window.localStorage.setItem("Profile25", JSON.stringify(profileArray[25]));
		}
			
		document.getElementById("btnGo").onclick = ddl_Dates;	

			
		function addProfile()
		{
			$("#btnSubmit").click(function (e) {

				var image = $("#txtProfImage").val();
				var username = $("#txtUsername").val();
				var name = $("#txtName").val();
                var gender = $("#ddlGender").val();

                //https://stackoverflow.com/questions/6177975/how-to-validate-date-with-format-mm-dd-yyyy-in-javascript/49178339
                var today = new Date();
                var dateOfBirth = new Date(document.getElementById("txtAge").value);
                var calcAge = today.getFullYear() - dateOfBirth.getFullYear();

                var age = calcAge;
				var description = $("#txtDescription").val();
				var city = $("#txtCity").val();
				var state = $("#ddlState").val();
				var status = $("input[name='newStatus']:checked").val();
				var hasKids = $("input[name='newHasKids']:checked").val();
				var wantsKids = $("input[name='newWantsKids']:checked").val();
				var religion = $("#ddlReligion").val();
				var typeOfRelationship = $("#ddlTypeOfRelationship").val();
				var isFormValid = true;


                //Validation below
				if(image.length < 3){
					alert("Image URL too short!");
					isFormValid = false;
				}

				for(var i = 0; i < profiles.length; i++){
					if(username == profiles[i].title){
						alert("This username is already in use. Please try again!");
						isFormValid = false;
					}
				}

				if(name == ""){
					alert("You must insert a name!");
					isFormValid = false;
				}

                if (gender == "Blank") {
                    alert("You must select a gender!");
                    isFormValid = false;
                }
					
				
				if(description == ""){
					alert("Description cannot be blank!");
					isFormValid = false;
				}

				if(city == ""){
					alert("City cannot be blank!");
					isFormValid = false;
				}

				if(state == "Blank"){
					alert("Please choose a state!");
					isFormValid = false;
				}

				if(status == "Blank"){
					alert("Please choose a relationship status!");
					isFormValid = false;
				}

				if(religion == "Blank"){
					alert("Please choose a religion!");
					isFormValid = false;
				}

				if(typeOfRelationship == "Blank"){
					alert("Please choose the type of relationship you are looking for!");
					isFormValid = false;
				}

				if(!isFormValid){
					alert("You're missing some information! Please fill it in and submit the form.")
					//https://stackoverflow.com/questions/19233254/jquery-submit-form-without-reloading-page
					e.preventDefault();
				}
				else{
					var newProfile = new profileInfo(image, username, name, gender, age, description, city, state, status, hasKids, wantsKids, religion, typeOfRelationship);
						
					var saveNewProf = JSON.stringify(newProfile);
					window.localStorage.setItem("saveNewProf", saveNewProf);
						
					profiles.push(newProfile);
					alert("Welcome to GetDates.com! Now go find your love!");
				}
			});
		}
			
		function findUser()
		{
			$("#btnFindUser").click(function (e) {
				var findUsername = $("#txtFindUsername").val();
				var found = false;

				for(var i = 0; i < profiles.length; i++){
					if(profiles[i].title == findUsername){
						$("#txtUsername").val(profiles[i].title);
						$("#txtProfImage").val(profiles[i].profImage);
						$("#txtName").val(profiles[i].name);
						$("#ddlGender").val(profiles[i].gender);
						$("#txtAge").val(profiles[i].age);
						$("#txtDescription").val(profiles[i].description);
						$("#txtCity").val(profiles[i].city);
						$("#ddlState").val(profiles[i].state);
						$("#input[name='newStatus']:checked").val(profiles[i].status);
						$("#input[name='hasKids']:checked").val(profiles[i].hasKids);
						$("#input[name='wantsKids']:checked").val(profiles[i].wantsKids);
						$("#ddlReligion").val(profiles[i].religion);
						$("#ddlTypeOfRelationship").val(profiles[i].relationshipType);

						found = true;
						break;
					}
				}
					if(!found)
					{
						alert("No user with this username found.");	
					}
					else{
						alert("User Found!");
					}
		});
	}
			
		
		function updateProfile()
		{
			$("#btnUpdateSubmit").click(function (e) {

					var image = $("#txtProfImage").val();
					var username = $("#txtUsername").val();
					var name = $("#txtName").val();
					var gender = $("#ddlGender").val();
					var age = $("#txtAge").val();
					var description = $("#txtDescription").val();
					var city = $("#txtCity").val();
					var state = $("#ddlState").val();
					var status = $("input[name='newStatus']:checked").val();
					var hasKids = $("input[name='newHasKids']:checked").val();
					var wantsKids = $("input[name='newWantsKids']:checked").val();
					var religion = $("#ddlReligion").val();
					var typeOfRelationship = $("#ddlTypeOfRelationship").val();
					var isFormValid = true;

					if(image.length < 3){
						alert("Image URL too short!");
						isFormValid = false;
					}

					
                    if (username == "") {
                        alert("You must insert a username!");
                        isFormValid = false;
                    }

					if(name == ""){
						alert("You must insert a name!");
						isFormValid = false;
					}

					if(gender == "Blank"){
						alert("You must select a gender!");
						isFormValid = false;
					}

					if(age == ""){
						alert("Age cannot be blank!");
						isFormValid = false;
					}

					if(description == ""){
						alert("Description cannot be blank!");
						isFormValid = false;
					}

					if(city == ""){
						alert("City cannot be blank!");
						isFormValid = false;
					}

					if(state == "Blank"){
						alert("Please choose a state!");
						isFormValid = false;
					}

					if(status == "Blank"){
						alert("Please choose a relationship status!");
						isFormValid = false;
					}

					if(religion == "Blank"){
						alert("Please choose a religion!");
						isFormValid = false;
					}

					if(typeOfRelationship == "Blank"){
						alert("Please choose the type of relationship you are looking for!");
						isFormValid = false;
					}

					if(!isFormValid){
						alert("You're missing some information! Please fill it in and submit the form.")
						//https://stackoverflow.com/questions/19233254/jquery-submit-form-without-reloading-page
						e.preventDefault();
					}
					else{
						var updatedProfile = new profileInfo(image, username, name, gender, age, description, city, state, status, hasKids, wantsKids, religion, typeOfRelationship);

						var updateProf = JSON.stringify(updatedProfile);
                        window.localStorage.setItem("updatedProfile", updateProf);
						
						profiles.push(updatedProfile);
						alert("Profile Updated");
					}
				});
		}
			
			
			
			
			
			
};	


function ddl_Dates() {
    var ddlGender = document.getElementById("ddlGender").value;
    var ddlState = document.getElementById("ddlState").value
    var ddlWantsKids = document.getElementById("ddlWantsKids").value;
    var ddlHasKids = document.getElementById("ddlHasKids").value;
    var ddlReligion = document.getElementById("ddlReligion").value;
    var ddlAgeRange = document.getElementById("ddlAgeRange").value;
    var divProfile = document.getElementById("profileInfo");
    divProfile.innerHTML = "";

    for (var i = 0; i < profiles.length; i++) {
        if (profiles[i].gender == ddlGender || ddlGender == "All") {
            if (profiles[i].state == ddlState || ddlState == "Blank") {
                if (profiles[i].wantsKids == ddlWantsKids || ddlWantsKids == "Blank") {
                    if (profiles[i].hasKids == ddlHasKids || ddlHasKids == "Blank") {
                        if (profiles[i].religion == ddlReligion || ddlReligion == "Blank") {
                            if (profiles[i].age == ddlAgeRange || ddlAgeRange == "Blank") {
                                var profImages = createImage(profiles[i].profImage, "245px", "300px", "20px");
                                var profileElements = document.createElement("span");
                                var newline = document.createElement("br");
                                var title = document.createElement("span1");
                                likeBtn = createLikeButton(profiles[i].profImage)
                                dislikeBtn = createRemoveButton(profiles[i].profImage);

                                title.innerHTML = printTitle(profiles[i].title)
                                profileElements.innerHTML = printInfo(profiles[i].name, profiles[i].age, profiles[i].description, profiles[i].city, profiles[i].state, profiles[i].status, profiles[i].hasKids, profiles[i].wantsKids, profiles[i].religion, profiles[i].relationshipType);
                                dislikeBtn.innerHTML = "Dislike"
                                likeBtn.innerHTML = "Like";

                                divProfile.appendChild(title);
                                divProfile.appendChild(profImages);
                                divProfile.appendChild(profileElements);
                                divProfile.appendChild(likeBtn);
                                divProfile.appendChild(dislikeBtn);
                                divProfile.appendChild(newline);
                            }
                        }
                    }
                }
            }
        }
    }
}

function savePassedArray() {
    var passedString = JSON.stringify(removedDates);
    window.localStorage.setItem("passedString", passedString);
}

var btn_Remove = function () {
    var index = this.id.replace("pass", "");

    for (var i = 0; i < profiles.length; i++) {
        profiles.splice(i, 1);
    }
    alert("Person Removed!");

    if (removedDates.indexOf(index) == -1) {
        removedDates.push(index);

        //var div = document.getElementById("RemovedPeople");

        var image = createImage(index, "200px", "220px")

       // div.appendChild(image);
        savePassedArray();
        ddl_Dates();
    }
    else {
        return;
    }
}

function createLikeButton(name) {
    var likeButton = document.createElement("input");
    likeButton.setAttribute("id", "like" + name);
    likeButton.setAttribute("name", "like" + name);
    likeButton.setAttribute("type", "button");
    likeButton.setAttribute("value", "Like");
    likeButton.addEventListener("click", btn_LikedDates);

    return likeButton;
}

function createRemoveButton(name) {
    var passButton = document.createElement("input");
    passButton.setAttribute("id", "pass" + name);
    passButton.setAttribute("name", "pass" + name);
    passButton.setAttribute("type", "button");
    passButton.setAttribute("value", "Remove");
    passButton.addEventListener("click", btn_Remove);

    return passButton;
}

function createImage(name, width, height) {

    // Create an img element dynamically
    var image = document.createElement("img");

    if (image != null && image != undefined) {
        image.src = name;
        image.style.width = width;
        image.style.height = height;
    }
    return image;
}

function likedDisplay() {
    var likedPeople = window.localStorage.getItem("likedString")
    likedArrayDis = JSON.parse(likedPeople);

    var display = document.getElementById("likedDatesImages");
    for (var i = 0; i < likedArrayDis.length; i++) {
        var image = createImage(likedArrayDis[i], "200px", "220px");
        display.appendChild(image);
        var removeFromFavs = createRemoveButton(likedArrayDis[i].name);
        display.appendChild(removeFromFavs);
    }

}

var btn_LikedDates = function () {
    // Get the professor selected from the drop-down list
    var index = this.id.replace("like", "");

    // Check to see if the professor is already marked as a favorite
    if (likedArray.indexOf(index) == -1) {
        // Add the person to the array
        likedArray.push(index);
        saveLikedArray();

        //var div = document.getElementById("likedDates");

        // Create an img element dynamically
        //var image = createImage(index, "100px", "150px", "20px");

        /*for(var i = 0; i < profiles.length; i++){
            var description = document.createTextNode(profiles[i].name + " " + profiles[i].age);
        }*/

        // Add the image to the favoritesList div
        /*div.appendChild(image)	
        div.appendChild(description);*/
    }
    else {
        return;
    }
};

function printInfo(name, age, description, city, state, status, hasKids, wantsKids, religion, relationshipType) {
    var profileInfo = ("<br><bold>Name: " + name + "<br>Age: " + age + "<br>Description: " + description + "<br>City: " + city + "<br>State: " + state + "<br>Status: " + status + "<br>Has Kids: " + hasKids + "<br>Wants Kids: " + wantsKids + "<br>Religion: " + religion + "<br>Type of Relationship: " + relationshipType + "<br>");
    return profileInfo;
}

function saveLikedArray() {
    var likedString = JSON.stringify(likedArray);
    window.localStorage.setItem("likedString", likedString);
}



function printTitle(Title) {
    var title = ("<br>" + Title + "<br>");
    return title;
}