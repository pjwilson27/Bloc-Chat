(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enable: true,
                requireBase: false
            });
            
        $stateProvider
            .state('home', {
                   url: '/home',
                   controller:'HomeCtrl as home',
                   templateURL:'/templates/home.html'
            });
            
    
    
    }
    
    angular
        .module('blocChat',['ui.router', 'firebase']);
        .config(config);
})();