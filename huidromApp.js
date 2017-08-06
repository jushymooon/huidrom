var huidromApp = angular.module("huidromApp", ['ngRoute']);
huidromApp.config(function($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: './resume.html'
    }).
    when('/experience', {
        templateUrl: './experience.html'
    }).
    when('/workdemo', {
        templateUrl: './work.demo.html'
    }).
    when('/projects', {
        templateUrl: './projects.html'
    }).
    when('/achievements', {
        templateUrl: './achievements.html'
    }).
    when('/contact', {
        templateUrl: './contact.html'
    }).
    when('/aboutthiswebsite', {
        templateUrl: './aboutthiswebsite.html'
    }).
    when('/sportsmatic', {
        templateUrl: './sportsmatic.html'
    }).
    when('/plo', {
        templateUrl: './plo.html'
    }).    
    otherwise({
        redirectTo: '/home'
    });
});