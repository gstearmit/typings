/**
 * Created by nktquan@gmail.com on 4/20/16.
 */


weshopApp.directive('weshopBigslider', function ($q, $timeout) {
    return {
        restrict: 'AE',
        transclude: true,
        scope: {
            images: '='
        },
        link: function ($scope, $element) {
            $scope.internalImages = [];
            $q.when($scope.images).then(function (images) {
                $scope.internalImages = images;
            }).then(function () {
                $timeout(function () {
                    $element.find('[data-root-element]').owlCarousel({
                        loop : true,
                        dots : true,
                        items : 1,
                        autoplay : true,
                        autoplayTimeout : 2000
                    });
                })
            })
            ;
        },
        templateUrl: 'weshop/template/slider.template.html'
    };
});

weshopApp.directive('brandSlider', function ($timeout) {
    return {
        restrict: 'AE',
        link: function (scope, $element) {

            var carouselOptions = {
                loop : true,
                dots : false,
                autoplay : true,
                autoplayTimeout : 2000,
                responsive:{
                    0:{
                        items:2,
                        slideBy: 2
                    },
                    480:{
                        items:3,
                        slideBy: 3
                    }
                }
            };
            $timeout(function () {
                $element.owlCarousel(carouselOptions);
            })
        }
    };
});

weshopApp.directive('detailSlider', function ($timeout) {
    return {
        restrict: 'AE',
        link: function (scope, $element) {

            var carouselOptions = {
                loop : true,
                dots : true,
                autoplay : true,
                autoplayTimeout : 2000,
                items: 1
            };
            $timeout(function () {
                $element.owlCarousel(carouselOptions);
            })
        }
    };
});

weshopApp.directive('surfBrandSlider', function ($timeout) {
    return {
        restrict: 'AE',
        link: function (scope, $element) {

            var carouselOptions = {
                loop : true,
                dots : false,
                autoplay : true,
                autoplayTimeout : 2000,
                responsive:{
                    0:{
                        items:2
                    },
                    480:{
                        items:3
                    }
                }
            };
            $timeout(function () {
                $element.owlCarousel(carouselOptions);
            })
        }
    };
});