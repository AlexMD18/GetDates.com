// JavaScript Document

var passedArray = [];

window.onload = function(){
var passedPeople = window.localStorage.getItem("passedString")
passedArray = JSON.parse(passedPeople);

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

		var div = document.getElementById("passedDates");
		for(var i = 0; i < passedArray.length; i++){
			var image = createImage(passedArray[i], "200px", "220px");
			div.appendChild(image);
		}

}