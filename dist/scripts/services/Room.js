(function(){
    function Room($firebaseArray){
        var firebaseRef = new Firebase('https://bloc-chat-fab00.firebaseio.com');
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var create = function($scope, name){
            rooms.$add(name);
        }
        return {
            all: rooms,
            create: create
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();