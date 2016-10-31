/**
 * Created by nktquan@gmail.com on 4/14/16
 */

weshopApp.controller('AuthController', ['$scope', '$rootScope', 'authContent', '$location', '$http', 'localStorageService', 'serverUrl', function ($scope, $rootScope, authContent, $location, $http, localStorageService, serverUrl) {
    $scope.pageClass = 'login';
    $scope.page.setTitle('Sign in');
    $rootScope.authContentPath = authContent["login"];
    $scope.login = function () {
        $http({
            url: serverUrl + '/v1/auth/login',
            method: "POST",
            data: {
                "username": $scope.username,
                "password": $scope.password
            },
            //headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
            localStorageService.cookie.set('token', data.data);
            $rootScope.token = localStorageService.cookie.get('token');
            console.log($rootScope.token);
            alert(data.message);
            if(data.status == true ){
                $location.path('/')
            }
        }).error(function (data, status, headers, config) {
            //console.log(data);
        });
    }
    $scope.logout = function () {
        localStorageService.cookie.clearAll();
    }
}]);


weshopApp.controller('RegisterController', ['$scope', '$rootScope', 'authContent', '$http', 'serverUrl', function ($scope, $rootScope, authContent, $http, serverUrl) {
    $scope.pageClass = 'register';
    $scope.page.setTitle('Sign up');
    $rootScope.authContentPath = authContent["register"];
    //$scope.register = function () {
        $http({
            url: serverUrl + '/v1/auth/reg',
            method: "POST",
            data: {
                //"username": "wsvn2sdf3dfd2323",
                //"password": "123456234242sdf",
                //"phone": "0912987945",
                //"email": "wsvssdfsdsssfdfsdfn2345@weshop.com.vn"
            },
            //headers: {'Content-Type': 'form-data'}
        }).success(function (data, status, headers, config) {
            console.log(data);
        }).error(function (data, status, headers, config) {
            //console.log(data);
        });
    //}
}]);

weshopApp.controller('ForgotController', ['$scope', '$rootScope', 'authContent', '$http', 'reCAPTCHA', 'serverUrl', function ($scope, $rootScope, authContent, $http, reCAPTCHA, serverUrl) {
    $scope.pageClass = 'forgot';
    $scope.page.setTitle('Forgot password');
    $rootScope.authContentPath = authContent["forgot"];
    $scope.captcha = {};
    $scope.forgot = function () {
        $http({
            url: serverUrl + '/v1/auth/forgot',
            method: "POST",
            data: {
                "email": $scope.email
            },
            //headers:{'Authorization': 'Basic '+ 'abc' }
        }).success(function (data, status, headers, config) {
            alert(data.message);
            //if(data.status == true ){
            //    $location.path('/')
            //}
        }).error(function (data, status, headers, config) {
            alert(data.message);
        });
    }
    reCAPTCHA.setPublicKey('6LfpIh8TAAAAAMM_anjeGjAKasJwCQ2p82C40Yt-');
}]);