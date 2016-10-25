/**
 * Created by nktquan@gmail.com on 8/30/16.
 */

weshopApp.controller('AccountDashboardController', function ($scope, $rootScope, backendHeader, backendContent) {
    $scope.pageClass = 'backend-account';
    $scope.page.setTitle('Account Dashboard');
    $rootScope.backendHeaderPath = backendHeader["header1"];
    $rootScope.backendContentPath = backendContent["account-dashboard"];
});
weshopApp.controller('AccountSettingController', function ($scope, $rootScope, backendHeader, backendContent) {
    $scope.pageClass = 'backend-account';
    $scope.page.setTitle('Account Setting');
    $rootScope.backendHeaderPath = backendHeader["header1"];
    $rootScope.backendContentPath = backendContent["account-setting"];
});
weshopApp.controller('ClaimReturnController', function ($scope, $rootScope, backendHeader, backendContent) {
    $scope.pageClass = 'claim-return';
    $scope.page.setTitle('Claim & Return');
    $scope.headTitle = 'Claim & Return';
    $rootScope.backendHeaderPath = backendHeader["header2"];
    $rootScope.backendContentPath = backendContent["claim-return"];
});
weshopApp.controller('InvoicePaymentController', function ($scope, $rootScope, backendHeader, backendContent) {
    $scope.pageClass = 'invoice-payment';
    $scope.page.setTitle('Invoices & Payment');
    $scope.headTitle = 'Invoices & Payment';
    $rootScope.backendHeaderPath = backendHeader["header2"];
    $rootScope.backendContentPath = backendContent["invoice-payment"];
});
weshopApp.controller('CouponController', function ($scope, $rootScope, backendHeader, backendContent) {
    $scope.pageClass = 'coupon';
    $scope.page.setTitle('Coupon');
    $scope.headTitle = 'Coupon';
    $rootScope.backendHeaderPath = backendHeader["header2"];
    $rootScope.backendContentPath = backendContent["coupon"];
});
weshopApp.controller('MessageController', function ($scope, $rootScope, backendHeader, backendContent) {
    $scope.pageClass = 'message';
    $scope.page.setTitle('Message');
    $scope.headTitle = 'Message';
    $rootScope.backendHeaderPath = backendHeader["header3"];
    $rootScope.backendContentPath = backendContent["message"];
});
weshopApp.controller('WalletController', function ($scope, $rootScope, backendHeader, backendContent) {
    $scope.pageClass = 'wallet';
    $scope.page.setTitle('WeShop Wallet');
    $scope.headTitle = 'WeShop Wallet';
    $rootScope.backendHeaderPath = backendHeader["header2"];
    $rootScope.backendContentPath = backendContent["wallet"];
});
weshopApp.controller('OrderController', function ($scope, $rootScope, backendHeader, backendContent) {
    $scope.pageClass = 'order';
    $scope.page.setTitle('Order');
    $scope.headTitle = 'Order';
    $rootScope.backendHeaderPath = backendHeader["header2"];
    $rootScope.backendContentPath = backendContent["order"];
});
weshopApp.controller('BiddingController', function ($scope, $rootScope, backendHeader, backendContent) {
    $scope.pageClass = 'bidding';
    $scope.page.setTitle('Bidding');
    $scope.headTitle = 'Bidding';
    $rootScope.backendHeaderPath = backendHeader["header2"];
    $rootScope.backendContentPath = backendContent["bidding"];
});
weshopApp.controller('FollowingController', function ($scope, $rootScope, backendHeader, backendContent) {
    $scope.pageClass = 'following';
    $scope.page.setTitle('Following');
    $scope.headTitle = 'Following';
    $rootScope.backendHeaderPath = backendHeader["header2"];
    $rootScope.backendContentPath = backendContent["following"];
});
weshopApp.controller('NotifyPurchaseController', function ($scope, $rootScope, backendHeader, backendContent) {
    $scope.pageClass = 'notify-purchase';
    $scope.page.setTitle('Notify incoming Purchases');
    $scope.headTitle = 'Notify incoming Purchases';
    $rootScope.backendHeaderPath = backendHeader["header2"];
    $rootScope.backendContentPath = backendContent["notify-purchase"];
});
weshopApp.controller('OrderTrackingController', function ($scope, $rootScope, backendHeader, backendContent) {
    $scope.pageClass = 'order';
    $scope.page.setTitle('Order Tracking');
    $rootScope.backendHeaderPath = backendHeader["header2"];
    $rootScope.backendContentPath = backendContent["order-tracking"];
    $scope.headTitle = 'Order Tracking';
});
weshopApp.controller('OrderItemController', function ($scope, $rootScope, backendHeader, backendContent) {
    $scope.pageClass = 'order';
    $scope.page.setTitle('Order Item');
    $rootScope.backendHeaderPath = backendHeader["header2"];
    $rootScope.backendContentPath = backendContent["order-item"];
    $scope.headTitle = 'Order Item';
});
weshopApp.controller('MyPackageController', function ($scope, $rootScope, backendHeader, backendContent) {
    $scope.pageClass = 'message';
    $scope.page.setTitle('My Package');
    $rootScope.backendHeaderPath = backendHeader["header2"];
    $rootScope.backendContentPath = backendContent["my-package"];
    $scope.headTitle = 'My Package';
});
weshopApp.controller('MyShipmentController', function ($scope, $rootScope, backendHeader, backendContent) {
    $scope.pageClass = 'message';
    $scope.page.setTitle('My Shipment');
    $rootScope.backendHeaderPath = backendHeader["header2"];
    $rootScope.backendContentPath = backendContent["my-shipment"];
    $scope.headTitle = 'My Shipment';
});
weshopApp.controller('VerifyController', function ($scope, $rootScope, backendHeader, backendContent) {
    $scope.pageClass = 'verify';
    $scope.page.setTitle('Verify');
    $rootScope.backendHeaderPath = backendHeader["header2"];
    $rootScope.backendContentPath = backendContent["verify"];
    $scope.headTitle = 'Verify';
});