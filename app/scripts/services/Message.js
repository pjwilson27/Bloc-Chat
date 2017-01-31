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
                console.log("going going...");
                messages.$add(newMessage);
                console.log("being returned");
                console.log(newMessage);
                return Message;
                console.log(newMessage);
            }
        };
        
    }
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();