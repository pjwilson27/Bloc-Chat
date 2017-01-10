(function(){
    function Room($firebaseArray){
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        rooms = ["room1", "room2", "room3"];
        var addRoom = function(name){
            ref.$add(name);
        };
    
        return {
            if(addRoom){
                rooms.push(name);
                all: ref;
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();