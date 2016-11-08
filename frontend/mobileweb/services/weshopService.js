/**
 * Created by nktquan@gmail.com on 4/14/16
 */

weshopApp.service('weshopService', ['$timeout', '$http', function ($timeout, $http) {
    return {
        getBigSlider: function () {
            return $timeout().then(function () {
                return [
                    {
                        "bigSliderId" : "1",
                        "bigSliderLink" : "assets/img/slider1.jpg",
                        "bigSliderName" : "Slider test 1"
                    },
                    {
                        "bigSliderId" : "2",
                        "bigSliderLink" : "assets/img/slider2.jpg",
                        "bigSliderName" : "Slider test 2"
                    },
                    {
                        "bigSliderId" : "3",
                        "bigSliderLink" : "assets/img/slider3.jpg",
                        "bigSliderName" : "Slider test 3"
                    }
                ];
            });
        },
        amzBannerList: function () {
            return $timeout().then(function () {
                return [
                    {
                        "amzBannerId" : "1",
                        "amzBannerLink" : "assets/img/ws-pd-banner.jpg",
                        "amzBannerName" : "Banner test 1"
                    },
                    {
                        "amzBannerId" : "2",
                        "amzBannerLink" : "assets/img/ws-pd-banner2.jpg",
                        "amzBannerName" : "Banner test 2"
                    },
                    {
                        "amzBannerId" : "3",
                        "amzBannerLink" : "assets/img/ws-pd-banner3.jpg",
                        "amzBannerName" : "Banner test 3"
                    },
                    {
                        "amzBannerId" : "4",
                        "amzBannerLink" : "assets/img/ws-pd-banner4.jpg",
                        "amzBannerName" : "Banner test 4"
                    }
                ];
            });
        },
        ebayBannerList: function () {
            return $timeout().then(function () {
                return [
                    {
                        "ebayBannerId" : "1",
                        "ebayBannerLink" : "assets/img/ws-pd-banner5.jpg",
                        "ebayBannerName" : "Banner test 1"
                    },
                    {
                        "ebayBannerId" : "2",
                        "ebayBannerLink" : "assets/img/ws-pd-banner2.jpg",
                        "ebayBannerName" : "Banner test 2"
                    },
                    {
                        "ebayBannerId" : "3",
                        "ebayBannerLink" : "assets/img/ws-pd-banner6.jpg",
                        "ebayBannerName" : "Banner test 3"
                    },
                    {
                        "ebayBannerId" : "4",
                        "ebayBannerLink" : "assets/img/ws-pd-banner7.jpg",
                        "ebayBannerName" : "Banner test 4"
                    }
                ];
            });
        },
        dhgateBannerList: function () {
            return $timeout().then(function () {
                return [
                    {
                        "dhgateBannerId" : "1",
                        "dhgateBannerLink" : "assets/img/ws-pd-banner.jpg",
                        "dhgateBannerName" : "Banner test 1"
                    },
                    {
                        "dhgateBannerId" : "2",
                        "dhgateBannerLink" : "assets/img/ws-pd-banner8.jpg",
                        "dhgateBannerName" : "Banner test 2"
                    },
                    {
                        "dhgateBannerId" : "3",
                        "dhgateBannerLink" : "assets/img/ws-pd-banner9.jpg",
                        "dhgateBannerName" : "Banner test 3"
                    },
                    {
                        "dhgateBannerId" : "4",
                        "dhgateBannerLink" : "assets/img/ws-pd-banner10.jpg",
                        "dhgateBannerName" : "Banner test 4"
                    }
                ];
            });
        },
        portalBannerList: function () {
            return $timeout().then(function () {
                return [
                    {
                        "portalBannerId" : "1",
                        "portalBannerLink" : "assets/img/banner-amazon.jpg",
                        "portalBannerName" : "Banner test 1"
                    },
                    {
                        "portalBannerId" : "2",
                        "portalBannerLink" : "assets/img/banner-ebay.jpg",
                        "portalBannerName" : "Banner test 2"
                    },
                    {
                        "portalBannerId" : "3",
                        "portalBannerLink" : "assets/img/banner-dhgate.jpg",
                        "portalBannerName" : "Banner test 3"
                    }
                ];
            });
        },
        recentlyViewProduct: function () {
            return $timeout().then(function () {
                return [
                    {
                        "productId" : "1",
                        "productImageLink" : "http://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/ywwAAOSwZG9Wi~mT/$_1.JPG",
                        "productName" : "Product test 1",
                        "productPrice" : "21.708.939"
                    },
                    {
                        "productId" : "2",
                        "productImageLink" : "http://i.ebayimg.com/images/g/cv8AAOSwKIpWCYtK/s-l240.jpg",
                        "productName" : "Product test 2",
                        "productPrice" : "21.708.939"
                    },
                    {
                        "productId" : "3",
                        "productImageLink" : "http://i.ebayimg.com/images/g/FUgAAOSwT6pV090y/s-l240.jpg",
                        "productName" : "Product test 3",
                        "productPrice" : "21.708.939"
                    },
                    {
                        "productId" : "4",
                        "productImageLink" : "http://i.ebayimg.com/images/g/jEMAAOSwHnFVwiJp/s-l240.jpg",
                        "productName" : "Product test 4",
                        "productPrice" : "21.708.939"
                    },
                    {
                        "productId" : "5",
                        "productImageLink" : "http://i.ebayimg.com/images/g/ProAAOSw0QFXCBgZ/s-l240.jpg",
                        "productName" : "Product test 5",
                        "productPrice" : "21.708.939"
                    },
                    {
                        "productId" : "6",
                        "productImageLink" : "http://i.ebayimg.com/images/g/7isAAOSwiylXBYcB/s-l240.jpg",
                        "productName" : "Product test 6",
                        "productPrice" : "21.708.939"
                    },
                    {
                        "productId" : "7",
                        "productImageLink" : "http://i.ebayimg.com/images/g/96oAAOSwQgpXArhH/s-l240.jpg",
                        "productName" : "Product test 7",
                        "productPrice" : "21.708.939"
                    },
                    {
                        "productId" : "8",
                        "productImageLink" : "http://i.ebayimg.com/images/g/esMAAOSwz2lXDMpi/s-l240.jpg",
                        "productName" : "Product test 8",
                        "productPrice" : "21.708.939"
                    }
                ];
            });
        }
        //getShop : function () {
        //    return $http.get('/')
        //}
    }
}]);