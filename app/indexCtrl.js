(function () {
    var app = angular.module('car-finder');
    app.controller('indexCtrl',['$interval', function ($interval) {
        var self = this;
        this.value = 1;
        this.time = new Date();

        $interval(function () {
            self.time = new Date();
        },100);
    }]);
})();