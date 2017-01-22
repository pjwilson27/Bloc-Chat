(function(){
    function BlocChatCookies($cookies, $uibModal){
        var currentUser = $cookies.get('blocChatCurrentUser');
        if(!currentUser || currentUser === ''){
            $uibModal.open({
                templateUrl: 'Cookie.html',
                controller: 'CookieCtrl',
                size: 'sm'
            })
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();