(function() {
    function CookieCtrl($scope, $uibModalInstance, $cookies, Room) {
        $scope.setUsername = function() {
            $cookies.blocChatCurrentUser = $scope.newUsername;
            $uibModalInstance.close($cookies.blocChatCurrentUser);
        };
    }
    
    angular
        .module('blocChat')
        .controller('CookieCtrl', ['$scope', '$uibModalInstance', '$cookies','Room', CookieCtrl]);
})();