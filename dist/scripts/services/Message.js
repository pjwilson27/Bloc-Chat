(function(){
    function Message($firebaseArray) {
        var messageRef = $firebaseArray(firebaseRef.child('messages'));
        
        function getMessages(roomId) {
            console.log("working?");
            return $firebaseArray(messageRef.orderByChild('roomID').equalTo(roomId));
        }
        
    }
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();