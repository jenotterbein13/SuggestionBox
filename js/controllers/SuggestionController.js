app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions){
	$scope.post = suggestions.posts[$routeParams.id];

	$scope.addComment = function(comment) {
		if(!$scope.title || $scope.title === "")
		{
			return;
		}

		$scope.post.comments.push({
			body: $scope.title,
			upvotes: 0
		});

		$scope.title = "";
	};

	$scope.upVote = function(comment) {
		comment.upvotes += 1;
	}
}])