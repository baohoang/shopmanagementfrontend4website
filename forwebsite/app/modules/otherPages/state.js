/**
 * Created by Ho�ng on 4/14/2016.
 */
myApp.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('page.dashboard', {
        url: "/dashboard",
        controller: 'DashboardController',
        templateUrl: '/modules/otherPages/views/dashboard.html',
        data: {
            pageTitle: 'DashBoard',
            requireLogin: false
        },
        resolve: {
            loadMyFiles: function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'ECSApp',
                    files: [
                        '/modules/otherPages/controllers/DashboardController.js',
                    ]
                });
            }
        },

    });
}]);
