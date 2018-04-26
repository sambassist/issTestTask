require('angular');
require('@uirouter/angularjs');
require('jquery');
require('angular-drag-drop');
require('bootstrap');
require('moment');

angular.module('testTask', ['ui.router', 'filearts.dragDrop'], function () {});

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