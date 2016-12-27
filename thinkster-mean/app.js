// Declaring the (?angular module?)
var app = angular.module('flapperNews', ['ui.router']);

// Configuration
app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	  $stateProvider
	    .state('home', {
	      url: '/home',
	      templateUrl: '/home.html',
	      controller: 'MainCtrl'
	    })
		.state('posts', {
		  url: '/posts/{id}',
		  templateUrl: '/posts.html',
		  controller: 'PostsCtrl'
		});	    
	  $urlRouterProvider.otherwise('home');

	}
]);

// Services
app.factory('postsService', [function(){
	var o = {
	posts: []
	// Populated with entries.
	// posts: [{title: 'post 1', upvotes: 121},
	// 	  {title: 'post 2', upvotes: 2},
	// 	  {title: 'post 3', upvotes: 15},
	// 	  {title: 'post 4', upvotes: 9},
	// 	  {title: 'post 5', upvotes: 4}]
	};
	return o;
}])

// Controllers
app.controller('MainCtrl', [
	'$scope',
	'postsService',
	function($scope, postsService){
		$scope.posts = postsService.posts;
		// Add posts
		$scope.addPost = function(){
			if(!$scope.title || $scope.title === '') { return; }
			$scope.posts.push({
			title: $scope.title,
			link: $scope.link,
			upvotes: 0,
			comments: [
				{author: 'Joe', body: 'Cool post!', upvotes: 0},
				{author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
				]
			});
			$scope.title = '';
			$scope.link = '';
		};
		// Add upvotes
		$scope.incrementUpvotes = function(post) {
		  post.upvotes += 1;
		};		
	}
]);

app.controller('PostsCtrl', [
'$scope',
'$stateParams',
'postsService',
function($scope, $stateParams, postsService){
	$scope.post = postsService.posts[$stateParams.id];
	$scope.addComment = function(){
	  if($scope.body === '') { return; }
	  $scope.post.comments.push({
	    body: $scope.body,
	    author: 'user',
	    upvotes: 0
	  });
	  $scope.body = '';
	};	
}]);