(function(){
<<<<<<< HEAD
    function HomeCtrl(Room){
        this.chatRooms = Room.all;
=======
    function HomeCtrl(Room, $uibModal){
        this.chatRooms = Room.all;
        
        this.openModal = function() {
            $uibModal.open({
                templateUrl: '/templates/Modal.html',
                controller: 'ModalCtrl',
                size: 'sm'
            });
        };
>>>>>>> create-chatroom
    }
    
    angular
        .module('blocChat')
<<<<<<< HEAD
        .controller('HomeCtrl',['Room', HomeCtrl]);
=======
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
>>>>>>> create-chatroom
})();