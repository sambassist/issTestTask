angular.module('testTask').component('mailsPage', {
    templateUrl: 'views/mails.html',
    bindings: { mails: '<' },
    controller: function () {
        this.techSupportList = [];
        this.marketingList = [];
        this.ceoList = [];
    }
});