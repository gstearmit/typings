<?php
use common\components\UrlComponent;
?>
<div class="bg-home"></div>
<a class="home-logo" href="<?= $this->context->baseUrl ?>"></a>
<div class="bg-search">
    <div class="bg-table">
        <div class="bg-cell">
            <div class="container">
                <div class="box-error">
                    <img src="<?= $this->context->baseUrl ?>images/box-error.png" alt="error" />
                    <div class="be-number"><img src="<?= $this->context->baseUrl ?>images/404.png" alt="500" /></div>
                    <div class="be-text">
                        Xin lỗi trang bạn truy cập không tìm thấy<br> Click <a href="<?=UrlComponent::baseUrlWallet()?>">vào đây</a> để trở lại <a href="<?=UrlComponent::baseUrlWallet()?>">Trang chủ</a>.
                    </div>
                </div>
            </div><!-- bg-cell -->
        </div><!-- bg-table -->
    </div><!-- bg-search -->
</div>