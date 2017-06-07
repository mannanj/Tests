// app.js

// modules
var validationApp = angular.module('validationApp', []);

// controllers
validationApp.controller('mainController', function($scope) {
	$scope.submitForm = function(isValid){
		$scope.submitted = true;
		if (isValid) {
			alert("Form Valid!")
		}else{console.log("INVALID FORM")}
	};
});