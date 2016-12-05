/**
 * Created by nktquan@gmail.com on 4/14/16
 */

weshopApp.service('$ebayService', ['$http', 'serverUrl', function ($http, serverUrl) {
    return {
        search: function (keyword) {
            var request = {
                method: 'POST',
                url: serverUrl + '/v1/ebay/find',
                data: {
                    keyword: keyword,
                    size: 10,
                    page: 1,
                    imageSize: 250,
                    filter: 0
                }
            };
            return $http(request).then(function (response) {
                return response.data; // return promise;
            })
        }
    };
}]);