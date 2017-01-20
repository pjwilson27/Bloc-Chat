(function(){
    function HomeCtrl($scope, Room, $uibModal){
        this.chatRooms = Room.all;
        this.activeRoom = function(room){
            this.activeRoom = room;
        }
        $scope.messages = null;
        
        $scope.setCurrentRoom = function(room){
            $scope.currentRoom = room;
            $scope.messages = Room.getMessages(room.$id);        
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