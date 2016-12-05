/**
 * Created by nktquan@gmail.com 4/14/16
 */

weshopApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/' , {
            templateUrl : 'view/weshop/index.html',
            controller : 'WeshopHomeController'
        })
        .when('/cart' , {
            templateUrl : 'view/weshop/index.html',
            controller : 'CartController'
        })
        .when('/checkout' , {
            templateUrl : 'view/weshop/index.html',
            controller : 'CheckoutController'
        })
        .when('/checkout-case2' , {
            templateUrl : 'view/weshop/index.html',
            controller : 'CheckoutCase2Controller'
        })
        .when('/shipping-address' , {
            templateUrl : 'view/weshop/index.html',
            controller : 'ShippingAddressController'
        })
        .when('/shipping-address-new' , {
            templateUrl : 'view/weshop/index.html',
            controller : 'ShippingAddressNewController'
        })
        .when('/checkout-success' , {
            templateUrl : 'view/weshop/index.html',
            controller : 'PaymentSuccessController'
        })
        .when('/empty-cart' , {
            templateUrl : 'view/weshop/index.html',
            controller : 'EmptyCartController'
        })
        .when('/surf-by-brand' , {
            templateUrl : 'view/weshop/index.html',
            controller : 'SurfBrandController'
        })
        .when('/login' , {
            templateUrl : 'view/auth/index.html',
            controller : 'AuthController'
        })
        .when('/register' , {
            templateUrl : 'view/auth/index.html',
            controller : 'RegisterController'
        })
        .when('/forgot' , {
            templateUrl : 'view/auth/index.html',
            controller : 'ForgotController'
        })
        .when('/search' , {
            templateUrl : 'view/weshop/index.html',
            controller : 'SearchController'
        })
        .when('/notification' , {
            templateUrl : 'view/weshop/index.html',
            controller : 'NotificationController'
        })
        .when('/shipping-calculator' , {
            templateUrl : 'view/weshop/index.html',
            controller : 'ShippingCalcController'
        })
        .when('/shipping-calculator-case2' , {
            templateUrl : 'view/weshop/index.html',
            controller : 'ShippingCalcCase2Controller'
        })
        .when('/help-faq' , {
            templateUrl : 'view/weshop/index.html',
            controller : 'HelpFaqController'
        })
        .when('/help-faq/detail' , {
            templateUrl : 'view/weshop/index.html',
            controller : 'HelpFaqDetailController'
        })
        .when('/all-brand' , {
            templateUrl : 'view/weshop/index.html',
            controller : 'AllBrandController'
        })
        .when('/size-chart' , {
            templateUrl : 'view/weshop/index.html',
            controller : 'SizeChartController'
        })
        .when('/amazon' , {
            templateUrl : 'view/amazon/index.html',
            controller : 'AmazonController'
        })
        .when('/amazon/categories' , {
            templateUrl : 'view/amazon/index.html',
            controller : 'AmazonCategoriesController'
        })
        .when('/amazon/browse' , {
            templateUrl : 'view/amazon/index.html',
            controller : 'AmazonBrowseController'
        })
        .when('/amazon/detail' , {
            templateUrl : 'view/amazon/index.html',
            controller : 'AmazonDetailController'
        })
        .when('/amazon/landing-campaign' , {
            templateUrl : 'view/amazon/index.html',
            controller : 'AmazonLandingCampaignController'
        })
        .when('/amazon/loading' , {
            templateUrl : 'view/amazon/index.html',
            controller : 'AmazonLoadingController'
        })
        .when('/ebay' , {
            templateUrl : 'view/ebay/index.html',
            controller : 'EbayController'
        })
        .when('/ebay/categories' , {
            templateUrl : 'view/ebay/index.html',
            controller : 'EbayCategoriesController'
        })
        .when('/ebay/browse' , {
            templateUrl : 'view/ebay/index.html',
            controller : 'EbayBrowseController'
        })
        .when('/ebay/detail' , {
            templateUrl : 'view/ebay/index.html',
            controller : 'EbayDetailController'
        })
        .when('/ebay/detail-bid' , {
            templateUrl : 'view/ebay/index.html',
            controller : 'EbayDetailBidController'
        })
        .when('/ebay/detail-bid2' , {
            templateUrl : 'view/ebay/index.html',
            controller : 'EbayDetailBid2Controller'
        })
        .when('/ebay/landing-campaign' , {
            templateUrl : 'view/ebay/index.html',
            controller : 'EbayLandingCampaignController'
        })
        .when('/dhgate' , {
            templateUrl : 'view/dhgate/index.html',
            controller : 'DhgateController'
        })
        .when('/404' , {
            templateUrl : 'view/weshop/index.html',
            controller : 'NotFoundController'
        })
        .when('/backend/account-dashboard' , {
            templateUrl : 'view/backend/index.html',
            controller : 'AccountDashboardController'
        })
        .when('/backend/account-setting' , {
            templateUrl : 'view/backend/index.html',
            controller : 'AccountSettingController'
        })
        .when('/backend/claim-return' , {
            templateUrl : 'view/backend/index.html',
            controller : 'ClaimReturnController'
        })
        .when('/backend/invoice-payment' , {
            templateUrl : 'view/backend/index.html',
            controller : 'InvoicePaymentController'
        })
        .when('/backend/coupon' , {
            templateUrl : 'view/backend/index.html',
            controller : 'CouponController'
        })
        .when('/backend/message' , {
            templateUrl : 'view/backend/index.html',
            controller : 'MessageController'
        })
        .when('/backend/wallet' , {
            templateUrl : 'view/backend/index.html',
            controller : 'WalletController'
        })
        .when('/backend/order' , {
            templateUrl : 'view/backend/index.html',
            controller : 'OrderController'
        })
        .when('/backend/bidding' , {
            templateUrl : 'view/backend/index.html',
            controller : 'BiddingController'
        })
        .when('/backend/following' , {
            templateUrl : 'view/backend/index.html',
            controller : 'FollowingController'
        })
        .when('/backend/notify-purchase' , {
            templateUrl : 'view/backend/index.html',
            controller : 'NotifyPurchaseController'
        })
        .when('/backend/order-tracking' , {
            templateUrl : 'view/backend/index.html',
            controller : 'OrderTrackingController'
        })
        .when('/backend/order-item' , {
            templateUrl : 'view/backend/index.html',
            controller : 'OrderItemController'
        })
        .when('/backend/my-package' , {
            templateUrl : 'view/backend/index.html',
            controller : 'MyPackageController'
        })
        .when('/backend/my-shipment' , {
            templateUrl : 'view/backend/index.html',
            controller : 'MyShipmentController'
        })
        .when('/backend/verify' , {
            templateUrl : 'view/backend/index.html',
            controller : 'VerifyController'
        })
    .otherwise({
            redirectTo: '/404'
        }
    );

    $locationProvider.html5Mode(true);
});

//weshopApp.config(['$translateProvider', function($translateProvider){
//    $translateProvider.useUrlLoader("");
//    $translateProvider.preferredLanguage('1');
//}])

weshopApp.run(['$rootScope', function($rootScope) {
    $rootScope.page = {
        setTitle: function(title) {
            this.title = title + ' - Weshop Global';
        }
    };

    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        $rootScope.page.setTitle(current.$$route.title || 'Homepage');
    });
}]);