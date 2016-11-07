app.factory('suggestions', [function($http) {
	var demoSuggestions = {
		posts: [
			{
				title: "Free pizza at club meetings",
				upvotes: 15,
				comments: [{body: "bananas", upvotes: 15}, {body: "Are we working?", upvotes: 2}]
			},
			{
				title: "End all club emails with Laffy Taffy jokes",
				upvotes: 3,
				comments: [{body: "", upvotes: 0}]
			},
			{
				title: "Retrofit water fountain with Gatorade",
				upvotes: 7,
				comments: [{body: "", upvotes: 0}]
			},
			{
				title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
				upvotes: 9,
				comments: [{body: "", upvotes: 0}]
			}
		]
	};
	return demoSuggestions;
}]);