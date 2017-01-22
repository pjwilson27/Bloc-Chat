(function() {
    function CookieCtrl($scope, $uibModalInstance, $cookies) {
        $scope.setUsername = function() {
            $cookies.blocChatCurrentUser = $scope.newUsername;
            
            $uibModalInstance.close();
        };
    }
    
    angular
        .module('blocChat')
        .controller('CookieCtrl', ['$scope', '$uibModalInstance', '$cookies', CookieCtrl]);
})();