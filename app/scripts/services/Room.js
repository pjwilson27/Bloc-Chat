(function(){
    function Room($firebaseArray){
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        rooms = ["room1", "room2", "room3"];
        rooms.$add({ rooms: "custom room" }).then(function(ref){
            var addRooms = ref.Room;
            console.log("Room has been successfully added");
            list.$indexFor(ref);
            
        })
    
        return {
            all: rooms
        };
        
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();