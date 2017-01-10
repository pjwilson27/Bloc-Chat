(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
            
        $stateProvider
            .state('home', {
                   url: '/',
                   controller: 'HomeCtrl as home',
                   templateURL: '/templates/home.html'
            })
            .state('modal', {
                url: '/scripts/controllers/ModalCtrl.js',
                controller: 'ModalCtrl as modal',
                templateURL: '/templates/Modal.html'
        });
        
    }
    
    angular
        .module('blocChat',['ui.router', 'firebase', 'ui.bootstrap'])
        .config(config);
})();