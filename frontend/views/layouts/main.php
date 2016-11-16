<html>
  <head>
    <base href="/">
    <title>Demo app</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- MDL CSS library  -->
    <link rel="stylesheet" href="node_modules/material-design-lite/material.min.css">
    <!-- MDL JavaScript library  -->
    <script src="node_modules/material-design-lite/material.min.js"></script>
    <!-- Material Design Icons  -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <!-- Custom Style  -->
    <link rel="stylesheet" href="styles.css">

    <!-- Polyfill(s) for older browsers -->
    <script src="node_modules/core-js/client/shim.min.js"></script>

    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/js/swiper.js"></script> 

    <script src="systemjs.config.js"></script>
    <script>
      System.import('app').catch(function(err){ console.error(err); });
    </script>
  </head>
  <body>
    <my-app>Loading...</my-app>
  </body>
</html>
