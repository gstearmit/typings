<?php
$params = array_merge(
    require(__DIR__ . '/../../common/config/params.php'),
    require(__DIR__ . '/params.php')
);
return [
    'id' => 'ws',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'controllerNamespace' => 'frontend\controllers',
    'components' => [
        'request' => [
            'baseUrl' => '',
        ],
    	'errorHandler' => [
    		'errorAction' => 'error/index',
   		],
        'session' => [
            'name' => 'PHPFRONTSESSID',
            'savePath' => sys_get_temp_dir(),
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'urlManager' => require(__DIR__ . '/urlManager.php'),
        'view' => [
            'class' => '\rmrevin\yii\minify\View',
            'enableMinify' => true,
            'base_path' => '@app/public',
            'minify_path' => '@app/public/assets/minify123/' . VERSION,
            'js_position' => [\yii\web\View::POS_END],
            'force_charset' => 'UTF-8',
            'expand_imports' => true,
        ],
    ],
    'params' => $params,
];
