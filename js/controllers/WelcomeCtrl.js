angular.module('nadya').controller('WelcomeCtrl', WelcomeCtrl);

function WelcomeCtrl($routeParams, $location) {
	this.$location = $location;
	this.currentPath = $location.path();
}
