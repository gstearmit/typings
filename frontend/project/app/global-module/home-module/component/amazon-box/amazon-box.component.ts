import { Component, OnInit} from '@angular/core';
import { AmazonBoxService } from './services/amazon-box.service';
import { AmazonBox }        from './model/amazon-box';
@Component({
    moduleId: module.id,
    selector: 'amazon-box',
    templateUrl: `amazon-box.component.html`,
    providers: [AmazonBoxService]
})

export class AmazonBoxComponent {
    public dataImage: {};
    public uploadUrl:string;
    public image:string;
    datas: AmazonBox[] = [];
    constructor(private amazonBoxService: AmazonBoxService) {
        this.getData();
    }

    getData(){
        let self = this;
        this.amazonBoxService.getDataAmazonBox().subscribe(function (res) {
        this.datas = res; 
        self.dataImage = this.datas.data.cms_block_data_image_banner;
        self.uploadUrl = this.datas.data.uploadUrl;
        self.image = this.datas.data.image;
     });
    }
}