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
            $scope.messages = Room.getByRoomId(this.currentRoom.$id);
            $scope.currentUser = $cookies.blocChatCurrentUser;
        };
        
        $scope.sendMessage = function(room) {
            Message.send($scope.newMessage, room.$id);
        };
        
          return this;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope','Room', '$uibModal', '$cookies', 'Message', HomeCtrl]);
})();