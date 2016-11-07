var app = angular.module("SuggestionBox", ["ngRoute"]);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'views/main.html' 
    })
    .when('/suggestion/:id', {
    	controller: "SuggestionController",
    	templateUrl: "views/suggestion.html"
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});