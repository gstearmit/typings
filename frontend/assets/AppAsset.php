<?php

/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace webclient;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle {

    public $basePath = '@webclient';
    public $baseUrl = '@webclient';
    public $css = [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "node_modules/font-awesome/css/font-awesome.min.css",
        "node_modules/animate.css/animate.css",
        "assets/libs/owl-carousel/owl.carousel.css",
        "assets/css/main.css",
    ];
    public $js = [
        "node_modules/jquery/dist/jquery.min.js",
        "assets/libs/owl-carousel/owl.carousel.min.js",
        "node_modules/angular/angular.min.js",
        "node_modules/angular-route/angular-route.min.js",
        "node_modules/angular-animate/angular-animate.min.js",
        "node_modules/angular-local-storage/dist/angular-local-storage.min.js",
        "assets/libs/angular-re-captcha/angular-re-captcha.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js",
        "config/weshopConfig.js",
        "controller/routeController.js",
        "controller/constantController.js",
        "controller/weshopController.js",
        "controller/amazonController.js",
        "controller/authController.js",
        "controller/dhgateController.js",
        "controller/ebayController.js",
        "controller/backendController.js",
        // Service include 
        "services/amazonService.js",
        "services/authService.js",
        "services/dhgateService.js",
        "services/ebayService.js",
        "services/weshopService.js",
        // Library directive 
        "assets/libs/angular-owl-carousel/src/angular-owl-carousel.js",
        "assets/libs/angular-elastic-input/dist/angular-elastic-input.min.js",
        // Directive include 
        "directives/weshopDirective.js",
        "directives/sliderDirective.js",
        // Customer include 
        "assets/libs/wow.min.js",
        "assets/js/main.js",
    ];
    public $jsOptions = array(
        'position' => \yii\web\View::POS_HEAD
    );
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];

}
