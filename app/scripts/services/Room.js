(function(){
    function Room($firebaseArray){
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var create = function($scope, name){
            rooms.$add(name);
        }
        return {
            all: rooms,
            create: create,
            getMessages: getMessages
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', 'Messages', Room]);
})();