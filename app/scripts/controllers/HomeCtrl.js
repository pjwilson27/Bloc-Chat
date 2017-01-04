(function(){
    function HomeCtrl(){
        var home = this;
    }
    
    angular
        .module('blocChat');
        .controller('HomeCtrl',['$firebaseArray', HomeCtrl]);
})