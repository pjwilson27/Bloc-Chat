(function(){
    function HomeCtrl(Room, $uibModal){
        this.chatRooms = Room.all;
        this.activeRoom = function(room){
            this.activeRoom = room;
            this.messages = Room.getMessages(this.activeRoom.$id);
        }
        
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
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();