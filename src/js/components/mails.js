angular.module('testTask').component('mailsPage', {
    templateUrl: 'views/mails.html',
    bindings: { mails: '<' },
    controller: function () {
        this.techSupportList = [];
        this.marketingList = [];
        this.ceoList = [];

        this.setData = function (data, container) {
            var index = container.indexOf(data);
            if (index == -1) {
                container.push(data);
            }
        };

        this.onDragComplete = function (data, e) {
            var index = this.mails.indexOf(data);

            if (index > -1) {
                this.mails.splice(index, 1);
            }
        };

        this.onDropComplete = function (data, e, type) {
            switch(type) {
                case 'tech':
                    this.setData(data, this.techSupportList);
                    break;
                case 'market':
                    this.setData(data, this.marketingList);
                    break;
                case 'ceo':
                    this.setData(data, this.ceoList);
                    break;
            }
        };

    }
});