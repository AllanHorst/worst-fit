angular.module('worstFitApp', [])

.controller('appController',  function($scope) {
	$scope.click = function(item) {
		// alert(item.name)
	}

	$scope.programs = [
		{
			size: 50,
			icon: "footage/chrome-icon.png",
			name: "Google Chrome",
			id: 1
		}, 
		{
			size: 30,
			icon: "footage/ie-icon.png", 
			name: "Internet Explorer", 
			id: 2
		}, 
		{
			size: 10,		
			icon: "footage/excel-icon.png",
			name: "Excel", 
			id: 3
		},
		{
			size: 5, 
			icon: "footage/word-icon.png",
			name: "Word", 
			id: 4
		},
		{
			size: 7, 
			icon: "footage/msn-icon.png",
			name: "MSN", 
			id: 5
		},
		{
			size: 3, 
			icon: "footage/spotify-icon.png",
			name: "Spotify", 
			id: 6
		},
		{
			size: 5, 
			icon: "footage/premiere-icon.png",
			name: "Adobe Premiere", 
			id: 7
		},
		{
			size: 5, 
			icon: "footage/ps-icon.png",
			name: "Adobe Photoshop", 
			id: 8
		}
	];


	$( function() {
		$( "#window" ).draggable();
	} );

	$( function() {
		$( "#window" ).resizable();
	} );

})