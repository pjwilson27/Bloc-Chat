(function(){
    function Room($firebaseArray){
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        //rooms = ["room1", "room2", "room3"];
        var create = function($scope, name){
            //var firebaseTry = URL("https://bloc-chat-fab00.firebaseio.com");
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