import { Component, OnInit} from '@angular/core';
import { AmazonBoxService } from './services/amazon-box.service';
import {AmazonBox}          from'./model/amazon-box';
import { TranslateService } from 'ng2-translate';
@Component({
    moduleId: module.id,
    selector: 'amazon-box',
    templateUrl: `amazon-box.component.html`,
    providers: [AmazonBoxService,TranslateService]
})

export class AmazonBoxComponent implements OnInit {
    public listimage:{};
    public slider:{};
    datas: AmazonBox[] = [];
    constructor(private amazonBoxService: AmazonBoxService,public translateService:TranslateService) {
        this.getData();
    }
    ngOnInit(){
        this.translateService.addLangs(["en", "vn"]);
        this.translateService.setDefaultLang('vn');
        this.translateService.use('vn');
    }
    getData(){
        let self = this;
        this.amazonBoxService.getDataAmazonBox().subscribe(function (res) {
        this.datas = res; 
        self.listimage = this.datas.listimage;
        self.slider    = this.datas.slider;
     });
    }
}