(function(){
    function HomeCtrl(Room){
        this.chatRooms = Room.all;
        
    $uibModal.open({
        templateUrl: '/templates/Modal.html',
        controller: 
    })
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl',['Room', HomeCtrl]);
})();