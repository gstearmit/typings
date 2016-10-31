<?php
/**
 * Created by PhpStorm.
 * User: ducquan
 * Date: 29/10/2015
 * Time: 17:57 PM
 */

namespace weshop\services;


use common\components\TextUtility;
use yii\helpers\Url;

class UrlProvider
{
    public static function item($name, $id)
    {
        return Url::base() . '/item/' . TextUtility::removeUnicode($name) . '-' . $id . '.html';
    }

    public static function auction($name, $id)
    {
        return Url::base() . '/auction/' . TextUtility::removeUnicode($name) . '-' . $id . '.html';
    }
}