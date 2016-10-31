angular.module('worstFitApp', [])

.controller('appController',  function($scope) {
	$scope.click = function(item) {
		findSpace(item.size, $scope.memory1);
		findSpace(item.size, $scope.memory2);

		if ($scope.larggerSpace.size == 0) {
			alert('Out of memory')
			return;
		} 

		malloc(item, $scope.larggerSpace)

	}

	function findSpace(size, memory) {

		if ($scope.larggerSpace == undefined) {
			$scope.larggerSpace = {
				size: 0
			}
		}

		for(var i = 0; i < memory.list.length; i++) {
			var item = memory.list[i];

			if (item.status == 'USED') {
				continue;
			}

			if (item.size >= size && $scope.larggerSpace.size < item.size) {
				$scope.larggerSpace = item;
				$scope.larggerSpace.memoryName = memory.name
			}
		}
	}

	function malloc(item) {
		var memoryName = $scope.larggerSpace.memoryName;
		
		for(var i = 0; i < $scope[memoryName].list.length; i++) {
			
			var space = $scope[memoryName].list[i];
			if (space.id == $scope.larggerSpace.id) {
				space.status = 'USED';
				space.process = item;
				break;
			}
		}
		$scope.larggerSpace = undefined
	}

	$scope.memory1 = {
		list: [],
		name: 'memory1',
		freeSpace: 100,
		full: false
	}

	$scope.memory2 = {
		list: [],
		name: 'memory2',
		freeSpace: 100,
		full: false
	}

	initialize($scope.memory1);
	initialize($scope.memory2);

	function initialize(memory) {
		var max = 20;
		var min = 4;

		var i = 1;
		
		while(!memory.full) {
			let status = parseInt(getRandomNumber(0, 2))	;

			let obj = {
				size: parseInt(getRandomNumber(min, max)),
				status: status == 1 ? 'USED' : 'FREE',
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
			size: 8, 
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