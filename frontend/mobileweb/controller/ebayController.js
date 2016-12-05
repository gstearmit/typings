/**
 * Created by nktquan@gmail.com on 4/14/16
 */

weshopApp.controller('EbayController', function ($scope, $rootScope, ebayHeader, ebayContent) {
    $scope.pageClass = 'ebay';
    $scope.page.setTitle('Ebay Portal');
    $rootScope.ebayHeaderPath = ebayHeader["header1"];
    $rootScope.ebayContentPath = ebayContent["homepage"];
    $scope.portal = 'ebay-menu';
    $scope.portalLv2 = 'open';
    $scope.portalLv4 = 'active';
});
weshopApp.controller('EbayCategoriesController', function ($scope, $rootScope, ebayHeader, ebayContent) {
    $scope.pageClass = 'ebay-cate';
    $scope.page.setTitle('Ebay Categories');
    $rootScope.ebayHeaderPath = ebayHeader["header1"];
    $rootScope.ebayContentPath = ebayContent["categories"];
});
weshopApp.controller('EbayBrowseController', ['$scope', '$rootScope', 'ebayHeader', 'ebayContent', '$ebayService', '$routeParams', function ($scope, $rootScope, ebayHeader, ebayContent, $ebaySerivce, $routeParams) {
    $ebaySerivce.search($routeParams['keyword'])// tra ve promise, muon lay promise thi phai dung then
        .then(function (result) {
            var data = result.data;
            $scope.items = data['searchData'] ? data['searchData'].items : [];
            $scope.count = data['searchData'];
            $scope.currencyPrice = data['defaultCurrencyData'];
            $scope.bid = function () {
                ngShow();
            }
        })
        .catch(function (error) {
            console.log(error); //bat loi
        });
    $scope.pageClass = 'ebay-browse';
    $scope.page.setTitle(getUrlParameter('keyword'));
    $rootScope.ebayHeaderPath = ebayHeader["header2"];
    $rootScope.ebayContentPath = ebayContent["browse"];
    $scope.page.setTitle('Antiques');
    $scope.headTitle = 'Antiques';
    // $scope.headTitle = getUrlParameter('keyword');
}]);
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
weshopApp.controller('EbayDetailController', ['$scope', '$rootScope', '$http', 'ebayHeader', 'ebayContent', '$ebayService', '$routeParams', 'weshopService', function ($scope, $rootScope, $http, ebayHeader, ebayContent, weshopService, $ebaySerivce, $routeParams) {
    $scope.pageClass = 'ebay-detail';
    $scope.page.setTitle('Ebay Detail');
    $rootScope.ebayHeaderPath = ebayHeader["header1"];
    $rootScope.ebayContentPath = ebayContent["detail"];
}]);
weshopApp.controller('EbayDetailBidController', ['$scope', '$rootScope', '$http', 'ebayHeader', 'ebayContent', '$ebayService', '$routeParams', 'weshopService', function ($scope, $rootScope, $http, ebayHeader, ebayContent, weshopService, $ebaySerivce, $routeParams) {
    $scope.pageClass = 'ebay-detail-bid';
    $scope.page.setTitle('Ebay Detail Bidding');
    $rootScope.ebayHeaderPath = ebayHeader["header1"];
    $rootScope.ebayContentPath = ebayContent["detail-bid"];
}]);
weshopApp.controller('EbayDetailBid2Controller', ['$scope', '$rootScope', '$http', 'ebayHeader', 'ebayContent', '$ebayService', '$routeParams', 'weshopService', function ($scope, $rootScope, $http, ebayHeader, ebayContent, weshopService, $ebaySerivce, $routeParams) {
    $scope.pageClass = 'ebay-detail-bid';
    $scope.page.setTitle('Ebay Detail Bidding');
    $rootScope.ebayHeaderPath = ebayHeader["header1"];
    $rootScope.ebayContentPath = ebayContent["detail-bid2"];
}]);
weshopApp.controller('EbayLandingCampaignController', ['$scope', '$rootScope', '$http', 'ebayHeader', 'ebayContent', '$ebayService', '$routeParams', 'weshopService', function ($scope, $rootScope, $http, ebayHeader, ebayContent, weshopService, $ebaySerivce, $routeParams) {
    $scope.pageClass = 'landing-campaign';
    $scope.page.setTitle('Ebay Landing Campaign');
    $rootScope.ebayHeaderPath = ebayHeader["header2"];
    $rootScope.ebayContentPath = ebayContent["landing-campaign"];
    $scope.headTitle = 'Ebay Special Deals';
}]);