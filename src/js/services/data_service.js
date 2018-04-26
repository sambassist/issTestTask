angular.module('testTask').service('$dataService', function ($http) {
    this.getMails = function () {
        return $http.get('data/mails.json', { cache: true }).then(function (response) {
            return response.data;
        });
    };
});