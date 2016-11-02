<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace frontend\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/animate.css/animate.css',
        'libs/owl-carousel/owl.carousel.css',
        'common/css/main.css'
    ];
    public $js = [
        'node_modules/jquery/dist/jquery.min.js',
        'common/libs/owl-carousel/owl.carousel.min.js',
        'node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-local-storage/dist/angular-local-storage.min.js',
        'common/libs/angular-re-captcha/angular-re-captcha.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        
        'config/weshopConfig.js',
        'controller/routeController.js',
        'controller/constantController.js',
        'controller/weshopController.js',
        'controller/amazonController.js',
        'controller/authController.js',
        'controller/dhgateController.js',
        'controller/ebayController.js',
        'controller/backendController.js',
        
        'services/amazonService.js',
        'services/authService.js',
        'services/dhgateService.js',
        'services/ebayService.js',
        'services/weshopService.js',
        
        'common/libs/angular-owl-carousel/src/angular-owl-carousel.js',
        'common/libs/angular-elastic-input/dist/angular-elastic-input.min.js',
        
        'directives/weshopDirective.js',
        'directives/sliderDirective.js',
        'common/libs/wow.min.js',
        'common/js/main.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
        'frontend\assets\AngularAsset',
    ];
}
