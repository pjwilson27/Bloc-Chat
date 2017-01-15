(function(){
    function Message($firebaseArray) {
        var messageRef =$firebaseArray(firebaseRef.child('messages'));
        
        function getMessages(roomId) {
            return messageRef.orderByChild('roomID').equalTo(roomId);
        }
        
    }
    angular
        .module('blocChat')
        .controller('Room', ['$firebaseArray', Room]);
})();