(function(){
    function HomeCtrl($scope, Room, $uibModal){
        this.chatRooms = Room.all;
        this.activeRoom = function(room){
            this.activeRoom = room;
        }
        $scope.messages = null;
        
        this.setCurrentRoom = function(room){
            this.currentRoom = room;
            this.messages = Room.getByRoomId(this.currentRoom.$id);        
        };
        
        this.openModal = function() {
            $uibModal.open({
                templateUrl: '/templates/Modal.html',
                controller: 'ModalCtrl',
                size: 'sm'
            });
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope','Room', '$uibModal', HomeCtrl]);
})();