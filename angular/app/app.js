var myApp = angular.module('uiRouterDemo', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "./templates/home.html"
      })
      .state('profile', {
        abstract: true,
        url: "/profile",
        templateUrl: "./templates/profile.html"
      })
      .state('profile.main', {
        url: "",
        templateUrl: "./templates/profile-main.html"
      })
      .state('profile.settings', {
          url: "/settings",
          templateUrl: "./templates/profile-settings.html"
      });
});