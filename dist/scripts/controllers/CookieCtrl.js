(function() {
    function CookieCtrl($scope, $uibModalInstance, $cookies, Room) {
        this.setUsername = function() {
            $cookies.put('blocChatCurrentUser', this.username);
            if(this.username === undefined || null) {
                alert("Please enter a username to continue!");
            } else {
            $uibModalInstance.close();
            }
        };
    }
    
    angular
        .module('blocChat')
        .controller('CookieCtrl', ['$scope', '$uibModalInstance', '$cookies','Room', CookieCtrl]);
})();