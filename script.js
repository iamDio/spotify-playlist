$(document).ready(function(){


var artistArray = [];

//allow the user to enter some names

	// event listener for the event submit
$('form').on('submit', function(e){
	var searchValue = $("#searchbar").val().trim()
	console.log(searchValue)
	getArtistInfo(searchValue);
	e.preventDefault();
	console.log(e);

	//push values of submit to artistsArray
var artistSubmit = $('input').val().trim();
	artistArray.push(artistSubmit);
		console.log(artistArray);
});


//Go to spotify and get the artists
function getArtistInfo(artist) {
	console.log(artist);
	// var performer = $(artist).attr('artists-name');
	// console.log("this is" + performer);
	var apiUrl = 'https://api.spotify.com/v1/search?q='+ artist
	 + '&type=artist'

	$.ajax({
		url : apiUrl,
		method: 'GET',
	}).done(function(response){
		console.log(response)
	})
}

});
//With the artist ids we want to get albums 

//Then get tracks

//Then build playlist

 


//SECONDARY FUNCTIONALITY
 //don't allow people to enter empty strings
 