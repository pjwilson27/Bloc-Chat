(function(){
    function HomeCtrl(Room/*, $uibModal*/){
        this.chatRooms = Room.all;
        
 /*       this.openModal = function() {
            var instantModal = $uibModal.open({
                templateUrl: '/templates/Modal.html',
                controller: function($scope, $uibModalInstance) {
                    $scope.newRoom = {name: ''};
                    $scope.cancel = function() {
                        $uibModalInstance.dismiss('cancel');
                    };
                    
                    $scope.create = function() {
                        $uibModalInstance.close($scope.newRoom);
                    };
                },
                size:'lg'
            });
            
            instantModal.result.then(function(data){
                Room.addRoom(data);
            });
            console.log("weee");
        };*/
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', /*'$uibModal',*/ HomeCtrl]);
})();