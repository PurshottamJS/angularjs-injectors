;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);
    DashboardController.$inject = ['$injector'];

    function DashboardController($injector) {
        var vm = this;
        //Use of injector
        $injector.invoke(function(dashboard) {
            vm.title = dashboard.title;
        })
    }
}(window, angular, undefined));
