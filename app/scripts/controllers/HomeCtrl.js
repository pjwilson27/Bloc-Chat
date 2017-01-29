(function(){
    function HomeCtrl($scope, Room, $uibModal, $cookies, Message){
        $scope.messages = null;
        $scope.currentUser = null;
        $scope.rooms = Room;
        $scope.currentRoom = null;
        this.chatRooms = Room.all;
        this.activeRoom = function(room){
            this.activeRoom = room;
        }
        
        this.openModal = function() {
            $uibModal.open({
                templateUrl: '/templates/Modal.html',
                controller: 'ModalCtrl',
                size: 'sm'
            });
        };
        this.setCurrentRoom = function(room){
            this.currentRoom = room;
            console.log(room);
            this.messages = Message.getByRoomId(room.$id);
            this.currentUser = $cookies.get('blocChatCurrentUser');
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