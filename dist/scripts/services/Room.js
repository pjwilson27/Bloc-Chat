(function(){
    function Room($firebaseArray){
        //var firebaseRef = new Firebase('https://bloc-chat-fab00.firebaseio.com');
        console.log(firebase);
        var ref = firebase.database().ref();
        var rooms = $firebaseArray(ref.child("rooms"));
        console.log(rooms);
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