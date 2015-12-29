angular.module('simpleTabController', [])
.controller('TabsCtrl', ['$scope', function ($scope) {
	$scope.tabs = [{
		title: 'First tab',
		url: 'first.html'
		}, {
		title: 'Second tab',
		url: 'second.html'
		}, {
		title: 'Third tab',
		url: 'third.html'
	}];
	$scope.currentTab = 'first.html';
	$scope.onClickTab = function (tab) {
		$scope.currentTab = tab.url;
	}
	$scope.isActiveTab = function(tabUrl) {
		return tabUrl == $scope.currentTab;
	}
}]);