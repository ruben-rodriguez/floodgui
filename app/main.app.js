'use strict';

angular.module('main.app', ['ngRoute', 'login.controller', 'form.controller', 'main.controller', 'graph.controller', 'rest.service', 'config.service'])


    .config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "./views/main.view.html",
                controller: "main.controller"
            })
            .when("/login", {
                templateUrl: "./views/login.view.html",
                controller: "login.controller"
            })
            .when("/previous", {
                templateUrl: "./views/previous.view.html",
                controller: "login.controller"
            })
            .when("/form", {
                templateUrl: "./views/form.view.html",
                controller: "form.controller"
            })
            .otherwise({
                redirectTo: '/login'
            })
    });