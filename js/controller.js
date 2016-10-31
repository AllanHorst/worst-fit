angular.module('worstFitApp', [])

.controller('appController',  function($scope) {
	$scope.click = function(item) {
		alert(item.name)
	}

	$scope.memory1 = {
		list: [],
		freeSpace: 100,
		full: false
	}

	$scope.memory2 = {
		list: [],
		freeSpace: 100,
		full: false
	}

	initialize($scope.memory1);
	initialize($scope.memory2);

	console.log($scope.memory1);
	console.log($scope.memory2);

	function initialize(memory) {
		var max = 20;
		var min = 4;

		var i = 1;
		
		while(!memory.full) {
			let type = parseInt(getRandomNumber(0, 2))	;

			let obj = {
				size: parseInt(getRandomNumber(min, max)),
				type: type == 1 ? 'USED' : 'FREE',
				description: type == 1 ? 'Process ' + i : 'Free space',
				id: Number(parseInt(getRandomNumber(1000, 1000000))).toString(16)
			}

			if (obj.size <= memory.freeSpace) {
				memory.list.push(obj);
			}
			
			memory.freeSpace -= obj.size;

			if (memory.freeSpace == 0) {
				memory.full = true;
			} else if (memory.freeSpace < 20) {
				max = memory.freeSpace;
				min = memory.freeSpace;
			}
			i++;
		}
	}

	function getRandomNumber(min, max) {
		return Math.random() * (max - min) + min;
	}
	$scope.programs = [
		{
			size: 20,
			icon: "footage/chrome-icon.png",
			name: "Google Chrome",
			id: 1
		}, 
		{
			size: 16,
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
			size: 9, 
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
			size: 11, 
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
			size: 18, 
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