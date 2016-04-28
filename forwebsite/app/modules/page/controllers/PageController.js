/**
 * Created by HungChelsea on 28-Apr-16.
 */
angular.module('ECSApp').controller('PageController', function ($rootScope, $scope, $state,CONFIG) {

    //thêm như thế để gọi đến các biến kia, dev mà ko biết chỉnh mấy cái newbie này
    console.log(CONFIG.API_URL);
    //$scope.hello = 'this is controller';
    //$state.go('.page');
});