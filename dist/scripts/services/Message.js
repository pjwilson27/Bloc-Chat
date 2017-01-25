(function(){
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function(roomId) {
console.log("working up to here");   
 //               var data = ref.orderByChild('roomID').equalTo(roomId);
//                var messages = $firebaseArray(data);
//                return messages;
                return $firebaseArray(ref.orderByChild('roomID').equalTo(roomId));
console.log("All the way through now!");
            },
            send: function(newMessage) {
                messages.$add({
                    username: $cookies.blocChatCurrentUser,
                    content: newMessage,
                    sentAt: 'date time',
                    roomId: roomId
                });
            }
        };
        
    }
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();