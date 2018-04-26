require('angular');
require('@uirouter/angularjs');
require('jquery');
require('popper.js');
require('bootstrap');
require('hlfs-ng-draggable');

angular.module('testTask', ['ui.router', 'ngDraggable'], function () {});

angular.module('testTask').config(function (
    $stateProvider,
    $locationProvider,
    $urlRouterProvider)
{
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        component: 'mailsPage',
        url: '/',
        resolve: {
            mails: function ($dataService) {
                return $dataService.getMails();
            }
        }
    });
});