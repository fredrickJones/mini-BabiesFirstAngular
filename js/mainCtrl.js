/* global $ */
'use strict';

var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {
	$scope.friends = ['Ben Eliason', 'Mike Every', 'Mike Kitto', 'Shevin Morris', 'Adam Hullinger'];
	// var addFriends = function() {
	// 	adlkj
	// };

	$scope.showFriends = true;

	$scope.toggleFriends = function() {
		$scope.showFriends = !$scope.showFriends;
	};
});
