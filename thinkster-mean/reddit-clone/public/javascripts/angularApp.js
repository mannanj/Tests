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
			controller: 'PostsCtrl',
			resolve: {
			post: ['$stateParams', 'postsService', function($stateParams, postsService) {
				return postsService.get($stateParams.id);
			}]
			}
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
	o.upvote = function(post) {
		return $http.put('/posts/' + post._id + '/upvote')
		.success(function(data){
			post.upvotes += 1;
		});
	};
	o.get = function(id) {
	return $http.get('/posts/' + id).then(function(res){
		return res.data;
	});
	};
	o.addComment = function(id, comment) {
		return $http.post('/posts/' + id + '/comments', comment);
	};
	o.upvoteComment = function(post, comment) {
		return $http.put('/posts/' + post._id + '/comments/'+ comment._id + '/upvote')
		.success(function(data){
			comment.upvotes += 1;
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
		  postsService.upvote(post);
		};
	}
]);

app.controller('PostsCtrl', [
'$scope',
'postsService',
'post',
function($scope, postsService, post){
	// $scope.post = postsService.posts[$stateParams.id];
	$scope.post = post;
	$scope.addComment = function(){
	  if($scope.body === '') { return; }
	  postsService.addComment(post._id, {
	  	body: $scope.body,
	  	author: 'user',
	  }).success(function(comment) {
	  	$scope.post.comments.push(comment);
	  });
	  $scope.body = '';
	};
	// Add upvotes
	$scope.incrementUpvotes = function(comment) {
		postsService.upvoteComment(post, comment);
	};
}]);