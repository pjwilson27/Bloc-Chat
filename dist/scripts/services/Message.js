(function(){
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function(roomId) { 
                var data = ref.orderByChild('roomId').equalTo(roomId);
                var messages = $firebaseArray(data);
                console.log(messages);
                return messages;
            },
            send: function(newMessage) {
                messages.$add(newMessage);
            }
        };
        
    }
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();