// JavaScript Document

var likedArray = [];

window.onload = function(){
var likedPeople = window.localStorage.getItem("likedString")
likedArray = JSON.parse(likedPeople);

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

		var div = document.getElementById("likedDates");
		for(var i = 0; i < likedArray.length; i++){
			var image = createImage(likedArray[i], "100px", "120px");
						div.appendChild(image);

		}

}