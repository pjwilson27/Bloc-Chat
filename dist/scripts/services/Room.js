(function(){
    function Room($firebaseArray){
        var ref = firebase.database().ref();
        var rooms = $firebaseArray(ref.child("rooms"));
        var create = function(name){
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