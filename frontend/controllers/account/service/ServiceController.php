<?php
/**
 * Created by PhpStorm.
 * User: ducquan
 * Date: 22/9/2015
 * Time: 17:04 PM
 */

namespace frontend\controllers\account\service;

use common\models\output\Response;
use yii\rest\Controller;

class ServiceController extends Controller
{
    public function response($success = false, $message = null, $data = null)
    {
        /*if (is_bool($success)) {
            \Yii::$app->response->format = 'json';
            return Response::json($success, $message, $data);
        }
        \Yii::$app->response->format = $message;
        return $success;*/
		\Yii::$app->response->format = 'json';
		return Response::json($success, $message, $data);
    }
    
	public function responseService(Response $resp, $contentType = 'json'){
		\Yii::$app->response->format = $contentType;
        return $resp;
	}
}