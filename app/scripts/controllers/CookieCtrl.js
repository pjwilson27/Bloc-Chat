(function() {
    function CookieCtrl($uibModalInstance, $cookies, Room) {
        this.setUsername = function() {
            console.log(username);
            if(this.username === undefined || null || ' ') {
                alert("Please enter a username to continue!");
                console.log("got to part 1");
            } else {
            $cookies.put('blocChatCurrentUser', this.username);
            $uibModalInstance.close();
            console.log("completed!")
            }
        }
    }
    
    angular
        .module('blocChat')
        .controller('CookieCtrl', ['$uibModalInstance', '$cookies','Room', CookieCtrl]);
})();