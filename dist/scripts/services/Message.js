(function(){
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function(roomId) { 
                var data = ref.orderByChild('roomID').equalTo(roomId);
                var messages = $firebaseArray(data);
  //              return messages;
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            },
            send: function(newMessage, roomId) {
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