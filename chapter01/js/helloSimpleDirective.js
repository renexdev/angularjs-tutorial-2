angular.module('myApp', [])
.controller('myController',[])
.directive('helloSimpleDirective', function() {
	return {
	scope: true, // inherits child scope from parent.
	restrict: 'E', // An Element Directive.
	replace: true,
	template: '<h3>Hello Simple Directive</h3>'
	};
});
