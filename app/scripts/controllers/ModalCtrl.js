(function(){
    function ModalCtrl($scope, $uibModal, Room){
        this.room = Room;
        
        this.open = function() {
            $uibModal.open({
                templateUrl: '/templates/Modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            });
        };
        
        this.close = function(){
            console.log("Working");
            if($scope.name === undefined){
                $scope.$close();
            }else{
                this.room.create($scope, $scope.name);
                $scope.$close();
            }
        };
        
        this.dismiss = function(){
            console.log("Working");
            $scope.$dismiss();
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModal', 'Room', ModalCtrl]);
})();