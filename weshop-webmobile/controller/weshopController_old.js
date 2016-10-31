/**
 * Created by nktquan@gmail.com on 4/14/16
 */

weshopApp.controller('MainController', function ($scope, $rootScope, $http, weshopHeaders, weshopContent, weshopService, $location) {

    //$rootScope.changeLanguage = function (langKey) {
    //    $translate.use(langKey);
    //}
    //console.log($rootScope.token);


    $rootScope.openMenuToggle = function () {
        $('.left-menu').addClass('open');
        $('.overlay-bg').show();
        $('.page').css('overflow','hidden');
    };
    $rootScope.closeMenuToggle = function () {
        $('.left-menu').removeClass('open');
        $('.overlay-bg').hide();
        $('.page').css('overflow','inherit');
    };
    $rootScope.openSubMenuAmz = function ($event){
        var thisParent = $($event.target.parentNode.parentNode);
        if(thisParent.prop('tagName') == 'UL'){
            thisParent = $($event.target.parentNode);
        }
        $(thisParent).addClass('active');
        $('.left-menu .menu-list .menu-content').addClass('open');
        $('.left-menu').addClass('amz-menu');
    };
    $rootScope.openSubMenuEbay = function ($event){
        var thisParent = $($event.target.parentNode.parentNode);
        if(thisParent.prop('tagName') == 'UL'){
            thisParent = $($event.target.parentNode);
        }
        $(thisParent).addClass('active');
        $('.left-menu .menu-list .menu-content').addClass('open');
        $('.left-menu').addClass('ebay-menu');
    };
    $rootScope.openSubMenu2 = function ($event) {
        var thisParent = $($event.target.parentNode.parentNode);
        if(thisParent.prop('tagName') == 'UL'){
            thisParent = $($event.target.parentNode);
        }
        $(thisParent).addClass('active');
        $('.left-menu .menu-list .menu-content').addClass('open');
    };
    $rootScope.backSubMenu = function () {
        $('.left-menu .menu-list .menu-content').removeClass('open');
        $('.left-menu').removeClass('amz-menu');
        $('.left-menu').removeClass('ebay-menu');
        $('.left-menu .menu-list li').removeClass('active');
    };
    $rootScope.cateGridView = function () {
        $('.recently-view .content .product-list').removeClass('list-view');
    };
    $rootScope.cateListView = function () {
        $('.recently-view .content .product-list').addClass('list-view');
    };
    $rootScope.pricingDetail = function () {
        $('.detail-info .show-detail').toggleClass('open');
        $('.detail-info .pricing-detail').slideToggle();
    };
    $scope.search = {keyword : ''};
    $scope.find = function (keyword) {
        weshopService.test(1).then(function (result) {
            console.log(result);
            $scope.test = result;
        });
      
        return false;
        return $location.path('/ebay/browse').search('keyword', keyword);
    }
});

weshopApp.controller('WeshopHomeController', function ($scope, $rootScope, $http, weshopHeaders, weshopContent, weshopService) {
    $scope.pageClass = 'homepage';
    $scope.page.setTitle('Homepage');
    $rootScope.weshopHeaderPath = weshopHeaders["header1"];
    $rootScope.weshopContentPath = weshopContent["homepage"];

    $scope.active = 1;
    $scope.tabClick = function (index) {
        $scope.active = index;
    };

    $scope.loadingImagesPromise = weshopService.getBigSlider();

    weshopService.amzBannerList().then(function (result) {
        $scope.amazonBannerList = result.splice(0, 4);
    });

    weshopService.ebayBannerList().then(function (result) {
        $scope.ebayBannerList = result.splice(0, 4);
    });

    weshopService.dhgateBannerList().then(function (result) {
        $scope.dhgateBannerList = result.splice(0, 4);
    });

    weshopService.portalBannerList().then(function (result) {
        $scope.portalBannerList = result.splice(0, 4);
    });

    weshopService.recentlyViewProduct().then(function (result) {
        $scope.recentlyViewProduct = result;
    });
});
weshopApp.controller('EmptyCartController', function ($scope, $rootScope, weshopHeaders, weshopContent) {
    $scope.pageClass = 'empty-cart';
    $scope.page.setTitle('Empty Cart');
    $rootScope.weshopHeaderPath = weshopHeaders["header2"];
    $rootScope.weshopContentPath = weshopContent["emptycart"];
    $scope.headTitle = 'Your Cart';
});
weshopApp.controller('CartController', function ($scope, $rootScope, weshopHeaders, weshopContent) {
    $scope.pageClass = 'cart';
    $scope.page.setTitle('Your cart (3)');
    $rootScope.weshopHeaderPath = weshopHeaders["header2"];
    $rootScope.weshopContentPath = weshopContent["cart"];
    $scope.headTitle = 'Your cart (3)';
});
weshopApp.controller('CheckoutController', function ($scope, $rootScope, weshopHeaders, weshopContent) {
    $scope.pageClass = 'checkout';
    $scope.page.setTitle('Check Out');
    $rootScope.weshopHeaderPath = weshopHeaders["header3"];
    $rootScope.weshopContentPath = weshopContent["checkout"];
    $scope.headTitle = 'Check Out';
});
weshopApp.controller('CheckoutCase2Controller', function ($scope, $rootScope, weshopHeaders, weshopContent) {
    $scope.pageClass = 'checkout';
    $scope.page.setTitle('Check Out');
    $rootScope.weshopHeaderPath = weshopHeaders["header3"];
    $rootScope.weshopContentPath = weshopContent["checkout-case2"];
    $scope.headTitle = 'Check Out';
});
weshopApp.controller('ShippingAddressController', function ($scope, $rootScope, weshopHeaders, weshopContent) {
    $scope.pageClass = 'shipping-address';
    $scope.page.setTitle('Shipping Address');
    $rootScope.weshopHeaderPath = weshopHeaders["header3"];
    $rootScope.weshopContentPath = weshopContent["shipping-address"];
    $scope.headTitle = 'Shipping Address';
});
weshopApp.controller('ShippingAddressNewController', function ($scope, $rootScope, weshopHeaders, weshopContent) {
    $scope.pageClass = 'shipping-address-new';
    $scope.page.setTitle('Shipping Address');
    $rootScope.weshopHeaderPath = weshopHeaders["header3"];
    $rootScope.weshopContentPath = weshopContent["shipping-address-new"];
    $scope.headTitle = 'Shipping Address';
});
weshopApp.controller('PaymentSuccessController', function ($scope, $rootScope, weshopHeaders, weshopContent) {
    $scope.pageClass = 'payment-success';
    $scope.page.setTitle('Successful Order');
    $rootScope.weshopHeaderPath = weshopHeaders["header3"];
    $rootScope.weshopContentPath = weshopContent["success"];
    $scope.headTitle = 'Successful Order';
});
weshopApp.controller('SurfBrandController', function ($scope, $rootScope, weshopHeaders, weshopContent) {
    $scope.pageClass = 'surf-brand';
    $scope.page.setTitle('Surf by Brands');
    $rootScope.weshopHeaderPath = weshopHeaders["header2"];
    $rootScope.weshopContentPath = weshopContent["surf-brand"];
    $scope.headTitle = 'Surf by Brands';
});
weshopApp.controller('SearchController', function ($scope, $rootScope, weshopHeaders, weshopContent) {
    $scope.pageClass = 'search';
    $scope.page.setTitle('Search');
    $rootScope.weshopHeaderPath = weshopHeaders["header4"];
    $rootScope.weshopContentPath = weshopContent["search"];
    $scope.headTitle = 'Search';
});
weshopApp.controller('NotificationController', function ($scope, $rootScope, weshopHeaders, weshopContent) {
    $scope.pageClass = 'notification';
    $scope.page.setTitle('Notification');
    $rootScope.weshopHeaderPath = weshopHeaders["header3"];
    $rootScope.weshopContentPath = weshopContent["notification"];
    $scope.headTitle = 'Notification';
});
weshopApp.controller('ShippingCalcController', function ($scope, $rootScope, weshopHeaders, weshopContent) {
    $scope.pageClass = 'shipping-calculator';
    $scope.page.setTitle('Shipping Calculator');
    $rootScope.weshopHeaderPath = weshopHeaders["header2"];
    $rootScope.weshopContentPath = weshopContent["shipping-calc"];
    $scope.headTitle = 'Shipping Calculator';
});
weshopApp.controller('ShippingCalcCase2Controller', function ($scope, $rootScope, weshopHeaders, weshopContent) {
    $scope.pageClass = 'shipping-calculator';
    $scope.page.setTitle('Shipping Calculator');
    $rootScope.weshopHeaderPath = weshopHeaders["header2"];
    $rootScope.weshopContentPath = weshopContent["shipping-calc2"];
    $scope.headTitle = 'Shipping Calculator';
});
weshopApp.controller('HelpFaqController', function ($scope, $rootScope, weshopHeaders, weshopContent) {
    $scope.pageClass = 'help-faq';
    $scope.page.setTitle('Help / FAQ');
    $rootScope.weshopHeaderPath = weshopHeaders["header3"];
    $rootScope.weshopContentPath = weshopContent["help-faq"];
    $scope.headTitle = 'Help / FAQ';
});
weshopApp.controller('HelpFaqDetailController', function ($scope, $rootScope, weshopHeaders, weshopContent) {
    $scope.pageClass = 'help-faq detail';
    $scope.page.setTitle('Help / FAQ');
    $rootScope.weshopHeaderPath = weshopHeaders["header3"];
    $rootScope.weshopContentPath = weshopContent["help-faq-detail"];
    $scope.headTitle = 'Help / FAQ';
});
weshopApp.controller('AllBrandController', function ($scope, $rootScope, weshopHeaders, weshopContent) {
    $scope.pageClass = 'all-brand';
    $scope.page.setTitle('All Brands');
    $rootScope.weshopHeaderPath = weshopHeaders["header2"];
    $rootScope.weshopContentPath = weshopContent["all-brand"];
    $scope.headTitle = 'All Brands';
});
weshopApp.controller('SizeChartController', function ($scope, $rootScope, weshopHeaders, weshopContent) {
    $scope.pageClass = 'size-chart';
    $scope.page.setTitle('Size Chart');
    $rootScope.weshopHeaderPath = weshopHeaders["header2"];
    $rootScope.weshopContentPath = weshopContent["size-chart"];
    $scope.headTitle = 'Size Chart';
});
weshopApp.controller('NotFoundController', function ($scope, $rootScope, weshopHeaders, weshopContent) {
    $scope.pageClass = 'notfound';
    $scope.page.setTitle('File Not Found');
    $rootScope.weshopHeaderPath = weshopHeaders["header2"];
    $rootScope.weshopContentPath = weshopContent["404"];
    $scope.headTitle = '404 error';
});
