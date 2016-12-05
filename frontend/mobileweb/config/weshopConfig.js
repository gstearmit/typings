/**
 * Created by nktquan@gmail.com on 5/5/16.
 */
var weshopApp = angular.module('weshopApp', ['ngRoute', 'ngAnimate', 'angular-owl-carousel', 'LocalStorageModule', 'reCAPTCHA', 'puElasticInput']);

weshopApp.constant('serverUrl', 'http://m.demo-ws.com');


weshopApp.config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setStorageCookie();
});

weshopApp.config(function (reCAPTCHAProvider) {
    // required: please use your own key :)
    reCAPTCHAProvider.setPublicKey('6LfpIh8TAAAAAMM_anjeGjAKasJwCQ2p82C40Yt-');

    // optional: gets passed into the Recaptcha.create call
    reCAPTCHAProvider.setOptions({
        theme: 'clean'
    });
})