require('angular');
require('@uirouter/angularjs');

angular.module('testTask', ['ui.router'], function () {});

angular.module('testTask').config(function (
    $stateProvider,
    $locationProvider,
    $urlRouterProvider)
{
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        component: 'mails',
        url: '/',
    });
});