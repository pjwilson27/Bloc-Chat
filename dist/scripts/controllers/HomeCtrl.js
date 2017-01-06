(function(){
    function HomeCtrl(Room){
        this.chatRooms = Room.getRooms().all;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl',['$firebaseArray', 'Room', HomeCtrl]);
})