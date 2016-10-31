/**
 * Created by nktquan@gmail.com on 4/14/16
 */

weshopApp.service('weshopService', ['$http','$location','$route', function($http,$location,$route) {
var weshopObj = {};
    weshopObj.getBigSlider = function(){
        return $http.get(serviceBase + 'books');
       // return $http.get(serviceBase + 'books');
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
        //return $http.get(serviceBase + 'books');
    }	
    weshopObj.amzBannerList = function () {
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
//            return $http.post( serviceBase + 'books', book )
//                    .then( successHandler )
//                    .catch( errorHandler );
//            function successHandler( result ) {
//                    $location.path('/book/index');			
//            }
//            function errorHandler( result ){
//                    alert("Error data")
//                    $location.path('/book/create')
//            }
    };	
    weshopObj.ebayBannerList = function(){
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
//        return $http.get(serviceBase + 'books/' + bookID);
    }
	
    weshopObj.dhgateBannerList = function () {
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
//        return $http.put(serviceBase + 'books/' + book.id, book )
//                    .then( successHandler )
//                    .catch( errorHandler );
//            function successHandler( result ) {
//                    $location.path('/book/index');
//            }
//            function errorHandler( result ){
//                    alert("Error data")
//                    $location.path('/book/update/' + book.id)
//            }	
    };	
    weshopObj.portalBannerList = function () {
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
//        return $http.delete(serviceBase + 'books/' + bookID)
//                    .then( successHandler )
//                    .catch( errorHandler );
//            function successHandler( result ) {
//                    $route.reload();
//            }
//            function errorHandler( result ){
//                    alert("Error data")
//                    $route.reload();
//            }	
    };
    weshopObj.recentlyViewProduct = function () {
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
//        return $http.delete(serviceBase + 'books/' + bookID)
//                    .then( successHandler )
//                    .catch( errorHandler );
//            function successHandler( result ) {
//                    $route.reload();
//            }
//            function errorHandler( result ){
//                    alert("Error data")
//                    $route.reload();
//            }	
    };
    return weshopObj;      
}]);