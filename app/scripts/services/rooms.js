(function(){
    function Room($firebaseArray){
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        rooms = ["room1", "room2", "room3"];
    }
    
    return {
        all: rooms
    };
    
    angular
        .module('blocChat');
        .factory('Room', ['$firebaseArray', Room]);
})();