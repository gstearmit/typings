<?php
$config = [
    'vendorPath' => dirname(dirname(__DIR__)) . '/vendor',
    'timeZone' => 'Asia/Ho_Chi_Minh',
    'components' => [
        'assetManager' => [
            'forceCopy' => true
        ],
        'log' => [
            'class' => 'yii\log\Dispatcher',
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                ],
            ],
        ],
        'view' => [
            'class' => '\rmrevin\yii\minify\View',
            'enableMinify' => false,
            'base_path' => '@app/public',
            'minify_path' => '@app/public/assets/minify/' . VERSION,
            'js_position' => [\yii\web\View::POS_END],
            'force_charset' => 'UTF-8',
            'expand_imports' => true
        ],
        'request' => [
            'cookieValidationKey' => 'alextuanit',
            'parsers' => [
                'application/json' => 'yii\web\JsonParser',
            ]
        ],
       // 'db' => require(__DIR__ . '/db.php'),
    ],
];

if (YII_DEBUG) {
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
        'allowedIPs' => ['127.0.0.1', '::1']
    ];
    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = 'yii\gii\Module';
}

return $config;