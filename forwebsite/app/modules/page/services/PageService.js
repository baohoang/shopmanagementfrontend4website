/**
 * Created by HungChelsea on 28-Apr-16.
 */

myApp.factory('Page', function ($resource, CONFIG) {
    return $resource(CONFIG.API_URL + "forshops/test/:params", {params: "@params"}, {
        update: {
            method: 'PUT'
        },
        get: {
            method: 'GET'
        },
        post: {
            method: 'POST'
        }
    });
}).service('PageService', function (Home) {
    var self = {
        'getData': function (success, error) {
            var params = {};
            Home.get(params).$promise.then(success, error);
        }
    };
    return self;
});