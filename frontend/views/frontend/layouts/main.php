<?php

use frontend\assets\AppAsset;
use yii\helpers\Html;
use yii\helpers\Url;

AppAsset::register($this);

?>

<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="en" ng-app="weshopApp">
    <head>
        <meta charset="<?= Yii::$app->charset ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="<?= $this->context->baseUrl ?>favicon.ico" type="image/x-icon" />
        <?= Html::csrfMetaTags() ?>
        <title data-ng-bind="page.title">WeShop Global -</title>
        <meta name="keywords" content= "<?= $this->context->keywrod ?>" />
        <meta name="description" content="<?= $this->context->description ?>" />
        <meta property="og:title" content="<?= $this->context->og['title'] ?>" />
        <meta property="og:site_name" content="<?= $this->context->og['site_name'] ?>"/>
        <meta property="og:url" content="<?= $this->context->og['url'] ?>"/>
        <meta property="og:image" content="<?= $this->context->og['image'] ?>"/>
        <meta property="og:description"  content="<?= $this->context->og['description'] ?>" />
        <link rel="canonical" href="<?= $this->context->canonical ?>" />
        <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
    </head>
    <?php $this->beginBody() ?>
        <body ng-controller="MainController">
            <div  class="page {{ pageClass}}" ng-view  autoscroll="true">
                <?= $content ?>
            </div> 
        </body>
    <?php $this->endBody() ?>   
</html>
<?php $this->endPage(); ?>
