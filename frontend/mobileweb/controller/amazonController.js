/**
 * Created by nktquan@gmail.com on 4/14/16
 */

weshopApp.controller('AmazonController', function ($scope, $rootScope, amazonHeader, amazonContent) {
    $scope.pageClass = 'amazon';
    $scope.page.setTitle('Amazon Portal');
    $rootScope.amazonHeaderPath = amazonHeader["header1"];
    $rootScope.amazonContentPath = amazonContent["homepage"];
    $scope.portal = 'amz-menu';
    $scope.portalLv2 = 'open';
    $scope.portalLv3 = 'active';
});
weshopApp.controller('AmazonCategoriesController', function ($scope, $rootScope, amazonHeader, amazonContent) {
    $scope.pageClass = 'amazon-cate';
    $scope.page.setTitle('Amazon Categories');
    $rootScope.amazonHeaderPath = amazonHeader["header3"];
    $rootScope.amazonContentPath = amazonContent["categories"];
});
weshopApp.controller('AmazonBrowseController', function ($scope, $rootScope, amazonHeader, amazonContent) {
    $scope.pageClass = 'amazon-browse';
    $rootScope.amazonHeaderPath = amazonHeader["header2"];
    $rootScope.amazonContentPath = amazonContent["browse"];
    $scope.page.setTitle('Camera, Photo & Video');
    $scope.headTitle = 'Camera, Photo & Video';
});
weshopApp.controller('AmazonDetailController', function ($scope, $rootScope, amazonHeader, amazonContent) {
    $scope.pageClass = 'amazon-detail';
    $scope.page.setTitle('Amazon Detail');
    $rootScope.amazonHeaderPath = amazonHeader["header1"];
    $rootScope.amazonContentPath = amazonContent["detail"];
});
weshopApp.controller('AmazonLandingCampaignController', function ($scope, $rootScope, amazonHeader, amazonContent) {
    $scope.pageClass = 'landing-campaign';
    $rootScope.amazonHeaderPath = amazonHeader["header2"];
    $rootScope.amazonContentPath = amazonContent["landing-campaign"];
    $scope.page.setTitle('Landing Campaign');
    $scope.headTitle = 'Amazon Special Deals';
});
weshopApp.controller('AmazonLoadingController', function ($scope, $rootScope, amazonHeader, amazonContent) {
    $scope.pageClass = 'amazon-browse';
    $rootScope.amazonHeaderPath = amazonHeader["header2"];
    $rootScope.amazonContentPath = amazonContent["loading"];
    $scope.page.setTitle('Camera, Photo & Video');
    $scope.headTitle = 'Camera, Photo & Video';
});