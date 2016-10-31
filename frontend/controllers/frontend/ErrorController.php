<?php
namespace frontend\controllers\frontend;

use Yii;


class ErrorController extends BaseController
{
	public function actionIndex()
	{
		$error = isset(Yii::$app->errorHandler->exception->statusCode) ? Yii::$app->errorHandler->exception->statusCode : 404;
		switch ($error){
			case 404:
				return $this->render("404");
				break;
			case 500:
				return $this->render("404");
				break;
			default:
				return $this->render("404");
				break;
		}
	}
	
	public function actionError()
    {
        return 'Error!';
    }
    
    public function action404(){
    	
    	return $this->render("404");
    }
}
