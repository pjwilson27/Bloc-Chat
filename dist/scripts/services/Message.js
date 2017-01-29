(function(){
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function(roomId) { 
                var data = ref.orderByChild('roomId').equalTo(roomId);
                var messages = $firebaseArray(data);
                console.log(messages);
  //              return messages;
                return messages;
            },
            send: function(newMessage) {
                console.log("being called");
                messages.$add({
                    username: $cookies.blocChatCurrentUser,
                    content: newMessage,
                    sentAt: 'date time',
                    roomId: roomId
                });
                return Message;
                console.log(newMessage);
                
            console.log("being returned");
            }
        };
        
    }
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();