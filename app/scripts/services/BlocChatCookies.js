(function(){
    function BlocChatCookies($cookies, $uibModal){
        var currentUser = $cookies.get('blocChatCurrentUser');
        if(!currentUser || currentUser === ''){
            $uibModal.open({
                templateUrl: '/templates/Cookie.html',
                controller: '/scripts/controllers/CookieCtrl',
                size: 'sm'
            })
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();