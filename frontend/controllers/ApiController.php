<?php
namespace frontend\controllers;

use Yii;
use common\models\LoginForm;
use frontend\models\ContactForm;
use yii\filters\ContentNegotiator;
use yii\web\Response;
use yii\filters\AccessControl;
use yii\rest\Controller;
use yii\filters\auth\HttpBearerAuth;

/**
 * Site controller
 */
class ApiController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator'] = [
            'class' => HttpBearerAuth::className(),
            'only' => ['dashboard'],
        ];
        $behaviors['contentNegotiator'] = [
            'class' => ContentNegotiator::className(),
            'formats' => [
                'application/json' => Response::FORMAT_JSON,
            ],
        ];
        $behaviors['access'] = [
            'class' => AccessControl::className(),
            'only' => ['dashboard'],
            'rules' => [
                [
                    'actions' => ['dashboard'],
                    'allow' => true,
                    'roles' => ['@'],
                ],
            ],
        ];
        return $behaviors;
    }
    public function actionListsliders()
    {
        $listImage = new \stdClass();
        for($i=0; $i<4; $i++){
             $item = new \stdClass();
             $item->{'src'} = 'app/common/img/slider'.$i.'.jpg';
             $item->{'title'} = 'image '.$i;
             $listImage->{$i} =$item; 
        }
        return $listImage;
    }
    // get data hot deal
    public function actionGetdatahotdeal(){
        $listData = new \stdClass();
        for($i=0; $i<10; $i++){
            $item = new \stdClass();
            $item->{'id'} = $i;
            $item->{'src'} = 'http://i.ebayimg.com/images/g/7isAAOSwiylXBYcB/s-l240.jpg';
            $item->{'title'} = 'Fitbit Blaze Smart Fitness Watch ...'.$i;
            $item->{'price'} = 4853125+$i;
            $item->{'currency'} = 'VND';
            $listData->{$i} = $item;
        }
        return $listData;

    }
    // get data amazon box
    public function actionGetdataamazonbox(){
        $data['listimage']=$listData = new \stdClass();
        $slider = new \stdClass();
        $slider->{'id'} = 1;
        $slider->{'src'} = 'app/common/img/banner-amazon.jpg';
        $slider->{'title'} = 'Fitbit Blaze Smart Fitness Watch ...';
        $slider->{'price'} = 4853125+1;
        $slider->{'currency'} = 'VND';
        $data['slider'][]   = $slider;
        for($i=0; $i<5; $i++){
            $item = new \stdClass();
            $item->{'id'} = $i;
            if($i==0){
                 $item->{'src'} = 'app/common/img/ws-pd-banner.jpg';
            }else{
                 $item->{'src'} = 'app/common/img/ws-pd-banner'.$i.'.jpg';
            }
            $item->{'title'} = 'Fitbit Blaze Smart Fitness Watch ...'.$i;
            $item->{'price'} = 4853125+$i;
            $item->{'currency'} = 'VND';
            $listData->{$i} = $item;
        }
        return $data;

    }
    // get data amazon box
    public function actionGetdataebaybox(){
        $data['listimage']=$listData = new \stdClass();
        $slider = new \stdClass();
        $slider->{'id'} = 1;
        $slider->{'src'} = 'app/common/img/banner-amazon.jpg';
        $slider->{'title'} = 'Fitbit Blaze Smart Fitness Watch ...';
        $slider->{'price'} = 4853125+1;
        $slider->{'currency'} = 'VND';
        $data['slider'][]   = $slider;
        for($i=0; $i<5; $i++){
            $item = new \stdClass();
            $item->{'id'} = $i;
            if($i==0){
                 $item->{'src'} = 'app/common/img/ws-pd-banner.jpg';
            }else{
                 $item->{'src'} = 'app/common/img/ws-pd-banner'.$i.'.jpg';
            }
            $item->{'title'} = 'Fitbit Blaze Smart Fitness Watch ...'.$i;
            $item->{'price'} = 4853125+$i;
            $item->{'currency'} = 'VND';
            $listData->{$i} = $item;
        }
        return $data;

    }
    // get data amazon box
    public function actionGetdatadhgatebox(){
        $data['listimage']=$listData = new \stdClass();
        $slider = new \stdClass();
        $slider->{'id'} = 1;
        $slider->{'src'} = 'app/common/img/banner-amazon.jpg';
        $slider->{'title'} = 'Fitbit Blaze Smart Fitness Watch ...';
        $slider->{'price'} = 4853125+1;
        $slider->{'currency'} = 'VND';
        $data['slider'][]   = $slider;
        for($i=0; $i<5; $i++){
            $item = new \stdClass();
            $item->{'id'} = $i;
            if($i==0){
                 $item->{'src'} = 'app/common/img/ws-pd-banner.jpg';
            }else{
                 $item->{'src'} = 'app/common/img/ws-pd-banner'.$i.'.jpg';
            }
            $item->{'title'} = 'Fitbit Blaze Smart Fitness Watch ...'.$i;
            $item->{'price'} = 4853125+$i;
            $item->{'currency'} = 'VND';
            $listData->{$i} = $item;
        }
        return $data;

    }
    public function actionLogin()
    {
        $data = Yii::$app->getRequest()->getBodyParams();
        $datajson = array();
        $datajson['status'] = false;
        $datajson['message'] = 'Error';
        if($data['username'] =='demo' && $data['password']=='demo'){
            $datajson['status'] = true;
            $datajson['message'] = 'ok';
            $datajson['data'] = $data;
           
        }
        return $datajson;
//        $model = new LoginForm();
//
//        if ($model->load(Yii::$app->getRequest()->getBodyParams(), '') && $model->login()) {
//            return ['access_token' => Yii::$app->user->identity->getAuthKey()];
//        } else {
//            $model->validate();
//            return $model;
//        }
    }

    public function actionDashboard()
    {
        $response = [
            'username' => Yii::$app->user->identity->username,
            'access_token' => Yii::$app->user->identity->getAuthKey(),
        ];

        return $response;
    }

    public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->getRequest()->getBodyParams(), '') && $model->validate()) {
            if ($model->sendEmail(Yii::$app->params['adminEmail'])) {
                $response = [
                    'flash' => [
                        'class' => 'success',
                        'message' => 'Thank you for contacting us. We will respond to you as soon as possible.',
                    ]
                ];
            } else {
                $response = [
                    'flash' => [
                        'class' => 'error',
                        'message' => 'There was an error sending email.',
                    ]
                ];
            }
            return $response;
        } else {
            $model->validate();
            return $model;
        }
    }
}
