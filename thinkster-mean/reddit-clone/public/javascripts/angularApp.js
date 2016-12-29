// Declaring the (?angular module?)
var app = angular.module('redditClone', ['ui.router']);

// Configuration
app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	  $stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl',
			resolve: {
			postPromise: ['postsService', function(postsService){
			 	return postsService.getAll();
			}]
			}
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
app.factory('postsService', ['$http', function($http){
	var o = {
		posts: []
	};
	o.getAll = function() {
		return $http.get('/posts').success(function(data){
			angular.copy(data, o.posts);
		});
	};
	o.create = function(post) {
		return $http.post('/posts', post).success(function(data){
			o.posts.push(data);
		});
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
			postsService.create({
				title: $scope.title,
				link: $scope.link,
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
	// Add upvotes
	$scope.incrementUpvotes = function(comment) {
	  comment.upvotes += 1;
	};
}]);