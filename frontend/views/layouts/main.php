<?php if ($_SERVER['SERVER_NAME'] == 'localhost:5000'): ?>
    <!DOCTYPE html>
    <html lang="en" ng-app="weshopApp">
    <head>
        <meta charset="utf-8">
        <base href="/">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>

        <title data-ng-bind="page.title">WeShop Global -</title>

        <!--Stylesheet include-->
        <link href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="node_modules/font-awesome/css/font-awesome.min.css" rel="stylesheet">
        <link href="node_modules/animate.css/animate.css" rel="stylesheet">
        <link href="common/libs/owl-carousel/owl.carousel.css" rel="stylesheet">

        <link href="common/css/main.css" rel="stylesheet">

        <!--Javascript include-->
        <script src="node_modules/jquery/dist/jquery.min.js"></script>
        <script src="common/libs/owl-carousel/owl.carousel.min.js"></script>
        <script src="node_modules/angular/angular.min.js"></script>
        <script src="node_modules/angular-route/angular-route.min.js"></script>
        <script src="node_modules/angular-animate/angular-animate.min.js"></script>
        <script src="node_modules/angular-local-storage/dist/angular-local-storage.min.js"></script>
        <script src="common/libs/angular-re-captcha/angular-re-captcha.js"></script>
        <!--<script src="node_modules/angular-translate/dist/angular-translate.min.js"></script>-->
        <!--<script src="node_modules/angular-translate/dist/angular-translate-loader-url/angular-translate-loader-url.min.js"></script>-->
        <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

        <!--Config include-->
        <script src="config/weshopConfig.js"></script>

        <!--Controller include-->
        <script src="controller/routeController.js"></script>
        <script src="controller/constantController.js"></script>
        <script src="controller/weshopController.js"></script>
        <script src="controller/amazonController.js"></script>
        <script src="controller/authController.js"></script>
        <script src="controller/dhgateController.js"></script>
        <script src="controller/ebayController.js"></script>
        <script src="controller/backendController.js"></script>

        <!--Service include-->
        <script src="services/amazonService.js"></script>
        <script src="services/authService.js"></script>
        <script src="services/dhgateService.js"></script>
        <script src="services/ebayService.js"></script>
        <script src="services/weshopService.js"></script>

        <!--Library directive-->
        <script src="common/libs/angular-owl-carousel/src/angular-owl-carousel.js"></script>
        <script src="common/libs/angular-elastic-input/dist/angular-elastic-input.min.js"></script>

        <!--Directive include-->
        <script src="directives/weshopDirective.js"></script>
        <script src="directives/sliderDirective.js"></script>

        <!--Customer include-->
        <script src="common/libs/wow.min.js"></script>
        <script src="common/js/main.js"></script>

    </head>
    <body ng-controller="MainController">

    <div class="page {{ pageClass }}" ng-view autoscroll="true"></div>

    </body>
    </html>
<?php else: ?>
    <html>
    <head>
        <base href="/">
        <title>Weshop</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Custom Style  -->
        <link rel="stylesheet" href="app.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/js/swiper.js"></script>
        <!-- Polyfill(s) for older browsers -->
        <script src="node_modules/core-js/client/shim.min.js"></script>

<<<<<<< HEAD
    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script src="systemjs.config.js"></script>
    <script>
      System.import('app').catch(function(err){ console.error(err); });
    </script>
  </head>
  <body>
=======
        <script src="node_modules/zone.js/dist/zone.js"></script>
        <script src="node_modules/reflect-metadata/Reflect.js"></script>
        <script src="node_modules/systemjs/dist/system.src.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

        <script src="systemjs.config.js"></script>
        <script>
            System.import('app').catch(function (err) {
                console.error(err);
            });
        </script>
    </head>
    <body>
>>>>>>> 3db9919ae2d5fec56608d5fa517e5cd664aa6a7b
    <mobile-app>Loading...</mobile-app>
    </body>
    </html>
<?php endif; ?>
