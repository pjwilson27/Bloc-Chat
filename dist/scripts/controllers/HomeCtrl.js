(function(){
    function HomeCtrl($scope, Room, $uibModal, $cookies, Message){
//        $scope.messages = null;
//        $scope.currentUser = null;
        this.rooms = Room.all;
        this.currentRoom = null;
        this.currentUser = $cookies.get('blocChatCurrentUser');
//        this.chatRooms = Room.all;
        
        this.openModal = function() {
            $uibModal.open({
                templateUrl: '/templates/Modal.html',
                controller: 'ModalCtrl',
                size: 'sm'
            });
        };
        this.activeRoom = function(room){
            this.activeRoom = room;
        }        

        
        this.setCurrentRoom = function(room){
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
            console.log(this.messages);
        };
        
        this.sendMessage = function() {
            this.newMessage.roomId = this.currentRoom.$id;
            this.newMessage.username = this.currentUser
            Message.send(this.newMessage);
        };
        
          return this;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope','Room', '$uibModal', '$cookies', 'Message', HomeCtrl]);
})();