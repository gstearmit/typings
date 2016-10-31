<?php
use yii\helpers\Url;
use common\components\UrlComponent;
?>
<div class="content-404">
	<span class="image"><img src="<?= Url::base(true); ?>/images/404.png"/></span>
	<div class="link">Xin lỗi trang bạn truy cập không tìm thấy<br> Click <a href="<?=UrlComponent::baseUrlWallet()?>">vào đây</a> để trở lại <a href="<?=UrlComponent::baseUrlWallet()?>">Trang chủ</a>.</div>
</div>