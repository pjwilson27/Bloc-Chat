(function(){
    function ModalCtrl($scope, $uibModalInstance, Room){
        
        $scope.newRoom = {};
        
        $scope.createNewRoom = function(){
            if(!$scope.newRoom.name || $scope.newRoom.name !== ''){
                var newRoom = {
                    name: $scope.newRoomName
                };

            Room.create(newRoom).then(function(){
                $scope.newRoom.name = '';
                $uibModalInstance.close();
            });

            } else {
                alert("You need to name the room!");
            }
        };
        
        $scope.cancel = function(){
            $uibModalInstance.close('cancel');
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Room', ModalCtrl]);
})();