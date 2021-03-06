var app = angular.module("simpleTabDirective", [])
app.directive('ngTabs', function() {
	return {
		scope: true,
		replace: true,
		restrict: 'E',
		transclude: true,
		template: ' \
		<div class="tab-content"> \
		<ul class="tabs-nav"> \
		<li ng-repeat="tab in tabs" \
		ng-class="{ active: currentTab == $index }"> \
		<a ng-click="selectTab($index)"> \
		{{tab}} \
		</a> \
		</li> \
		</ul> \
		<div ng-transclude></div> \
		</div>',
		controller: function($scope) {
			$scope.currentTab = 0;
			$scope.tabs = [];
			$scope.selectTab = function(index) {
				$scope.currentTab = index;
			};
			return $scope;
		}
	}
})
app.directive('contentTab', function() {
	return {
		//http://stackoverflow.com/questions/14915332/what-does-require-of-directive-definition-object-take
		require: '^ngTabs',
		restrict: 'E',
		transclude: true,
		replace: true,
		scope: true,
		template: '<div class="tab-content" ng-show="showTab()" ng-transclude></div>',
		link: function(scope, element, attrs, ngTabs) {
			//alert(ngTabs.tabs);
			var tabId = ngTabs.tabs.length;
			//alert(tabId);
			scope.showTab = function() {
				return tabId == ngTabs.currentTab;
			};
			ngTabs.tabs.push(attrs.datHeading);
		}
	}
});