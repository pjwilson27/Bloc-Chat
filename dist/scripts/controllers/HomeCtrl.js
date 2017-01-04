(function(){
    function HomeCtrl(){
        this.mainContent = "Testing!"
    }
    
    angular
        .module('blocChat');
        .controller('HomeCtrl',['$firebaseArray', HomeCtrl]);
})