/**
 * Created by Ho�ng on 4/14/2016.
 */
myApp.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('page.about-us', {
        url: "/about-us",
        controller: 'AboutusController',
        templateUrl: '/modules/about-us/views/about-us.html',
        data: {
            pageTitle: 'About Us',
            requireLogin: false
        },
        resolve: {
            loadMyFiles: function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'ECSApp',
                    files: [
                        '/modules/about-us/controllers/AboutusController.js',
                    ]
                });
            }
        },

    });
}]);
