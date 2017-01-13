(function(){
    function HomeCtrl(Room, $uibModal){
        this.chatRooms = Room.all;
        
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