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
            $scope.currentRoom = room;
            console.log(room);
            $scope.messages = Message.getByRoomId(room.$id);
            $scope.currentUser = $cookies.get('blocChatCurrentUser');
        };
        
        $scope.sendMessage = function() {
            $scope.newMessage.roomId = this.currentRoom.$id;
            $scope.newMessage.username = this.currentUser
            Message.send($scope.newMessage);
        };
        
          return this;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope','Room', '$uibModal', '$cookies', 'Message', HomeCtrl]);
})();