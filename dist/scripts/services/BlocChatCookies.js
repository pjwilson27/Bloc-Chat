(function(){
    function BlocChatCookies($cookies, $uibModal){
        var currentUser = $cookies.get('blocChatCurrentUser');
        if(!currentUser || currentUser === ''){
            $uibModal.open({
                templateUrl: '/templates/Cookie.html',
                controller: 'CookieCtrl',
                size: 'sm',
                keyboard: false,
                backdrop: 'static'
            });
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
        
})();