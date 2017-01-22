(function(){
    function Message($firebaseArray) {
        var ref = firebase.database().ref.child("messages");
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function(roomId) {
console.log("working up to here");                
                $firebaseArray(ref.orderByChild('roomID').equalTo(roomId));
console.log("All the way through now!");
            }
        }
        
    }
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();