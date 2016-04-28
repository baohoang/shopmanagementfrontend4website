myApp.config(function ($provide, $httpProvider) {
    $provide.factory('MyHttpInterceptor', function ($q, $location, $localStorage, localStorageService) {

        var interceptor = {
            request: function (config) {
                config.headers = config.headers || {};
                if ($localStorage.token) {
                    config.headers.Authorization = 'Bearer ' + $localStorage.token;
                }
                return config;
            },//khi có 1 http request sẽ nhảy qua đây để chèn key chứ ko phải lúc nào chú cũng chèn key vào
            requestError: function (rejection) {
                return $q.reject(rejection);
            },//có lỗi thì phun ra
            response: function (response) {
                return response || $q.when(response);
            },//có respone thì phun ra
            responseError: function (rejection) {
                //if (rejection.status === 400 || rejection.status === 401 || rejection.status === 403) {
                //    localStorageService.clearAll();
                //    $location.path('/login');
                //}
                return $q.reject(rejection);
            },//khi có lỗi từ api trả về nếu xác định là 400 401 403 thì nó sẽ clearAll dữ liệu ở local bắt đăng nhập lại
        };
        return interceptor;
    });
    $httpProvider.interceptors.push('MyHttpInterceptor');
});