<?php
/**
 * Created by PhpStorm.
 * User: quannd
 * Date: 3/7/16
 * Time: 4:04 PM
 */

namespace frontend\controllers\account;

use Yii;
use yii\helpers\Url;
use yii\web\Controller;
use common\models\db\TransactionAccount;
use common\models\service\RedirectinitService;
use common\components\UrlComponent;

abstract class BaseController extends Controller
{
    public $staticClient;
    public $baseUrl;
    public $title_extend = " - Account | bitpro";
    public $title;
    public $description;
    public $keywrod;
    public $og;
    public $canonical;
    public $var = [];
    protected $_name;

    public $name = '';
    public $actions = [];
    public $breadCrumbRightHtml = '';
    public $transactionAccount;
    public function init()
    {
        parent::init();
        $this->baseUrl = Url::base() . '/account/';
        $this->layout = "@app/views/account/layouts/main";
    }

    public function beforeAction($action)
    {
        if (\Yii::$app->user->getIsGuest()) {
           return RedirectinitService::redirectInit(UrlComponent::baseUrlWallet());
        }
        if (\Yii::$app->user->identity->id) {
           $this->transactionAccount = TransactionAccount::find()->where(['customerId'=>Yii::$app->user->identity->id])->one();
           if($this->transactionAccount->isIntialized==2){
            return RedirectinitService::redirectInit(UrlComponent::baseUrlWallet().'/verify/'.$this->transactionAccount->customerId.'-'.$this->transactionAccount->transactionAccountCode.'.html');
           }
           if($this->transactionAccount->isIntialized==0){
            return RedirectinitService::redirectInit(UrlComponent::baseUrlWallet().'/formverify.html');
           }
        }
        $this->title = isset($this->actions[\Yii::$app->controller->action->id]) ? $this->actions[\Yii::$app->controller->action->id] . ' ' . $this->title_extend : \Yii::$app->controller->action->id;
        return parent::beforeAction($action);
    }

}