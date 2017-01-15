(function(){
    function BlocChatCookies($cookies, $uibModal){
        var currentUser = $cookies.get('blocChatCurrentUser');
        if(!currentUser || currentUser === ''){
            $uibModal.open({
                //modal configurations
            })
        }
    }
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();