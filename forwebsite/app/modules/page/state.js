/**
 * Created by HungChelsea on 28-Apr-16.
 */
myApp.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('page', {
        url: "/page",
        views: {
            '': {
                templateUrl: "/modules/page/views/page.html",
                controller: "PageController",
            },
            'header@page': {
                templateUrl: '/modules/page/views/header.html',
                controller: 'HeaderController'
            },
            'footer@page': {
                templateUrl: '/modules/page/views/footer.html',
                controller: 'FooterController'
            }
        },
        redirectTo: 'page.dashboard',
        // cái này là sau khi nó chèn xong thì redirect dến 1 các route nào đó mà chú cần mẹ gì cái này
        //bình thường a làm chia làm header, main, footer nên khi nó đính vào index.html thì redirect đến lần lượt
        data: {

            pageTitle: 'Page',
            requireLogin: false
        },
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'ECSApp',
                    files: [
                        '/modules/page/controllers/PageController.js',
                        '/modules/page/services/PageService.js',
                        '/modules/page/controllers/FooterController.js',
                        '/modules/page/controllers/HeaderController.js'
                    ]
                });
            }]
        }
    });
}]);
