(function() {
    function CookieCtrl($scope, $uibModalInstance, $cookies, Room) {
        $scope.setUsername = function(username) {
            console.log(username);
            if(username === null){
                alert("You must enter something!");
            } else if (username === undefined) {
                alert("Seriously, just pick a damn username");
            } else if (username === ''){
                alert("Think you're clever leaving a blank? Cmon man.");
            } else{
                $cookies.put('blocChatCurrentUser', username);
                $uibModalInstance.close();
                console.log("completed!")
            };
            }
    }
    
    angular
        .module('blocChat')
        .controller('CookieCtrl', ['$scope','$uibModalInstance', '$cookies','Room', CookieCtrl]);
})();