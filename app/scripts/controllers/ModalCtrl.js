(function(){
    function ModalCtrl($scope, $uibModalInstance, Room){
        
        $scope.newRoom = {};
        
        $scope.createNewRoom = function(){
            if(!$scope.newRoom.name || $scope.newRoom.name !== ''){
                var newRoom = {
                    name: $scope.newRoomName
                };

                Room.create(newRoom)
                $scope.newRoom.name = '';
                $uibModalInstance.close();
console.log("created!");

            } else {
                alert("You need to name the room!");
            }
        };
        
        $scope.cancel = function(){
            $uibModalInstance.close('cancel');
console.log("completed");
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Room', ModalCtrl]);
})();