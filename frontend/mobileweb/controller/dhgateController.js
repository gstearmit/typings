/**
 * Created by nktquan@gmail.com on 4/14/16
 */

weshopApp.controller('DhgateController', function ($scope, $rootScope, dhgateHeader, dhgateContent) {
    $scope.pageClass = 'dhgate';
    $scope.page.setTitle('DHGate Portal');
    $rootScope.dhgateHeaderPath = dhgateHeader["header1"];
    $rootScope.dhgateContentPath = dhgateContent["homepage"];
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
});