<?php
defined('VERSION') or define('VERSION', "2.0.6");

Yii::setAlias('common', dirname(__DIR__));

Yii::setAlias('frontend', dirname(dirname(__DIR__)) . '/frontend');
