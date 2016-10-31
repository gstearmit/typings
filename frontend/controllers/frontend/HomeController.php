<?php
namespace frontend\controllers\frontend;
//use common\models\output\DataPage;
class HomeController extends BaseController
{
    public function actionIndex(){ 
      
       return $this->render('index',[]);
    }
    
}
