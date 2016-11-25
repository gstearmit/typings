import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AmazonBoxService } from 'services/amazon-box.service';
import {AmazonBox}          from'model/amazon-box';

@Component({
    moduleId: module.id,
    selector: 'amazon-box',
    templateUrl: `amazon-box.component.html`
})

export class AmazonBoxComponent implements OnInit {
    public listimage:{};
    public slider:{};
    datas: AmazonBox[] = []
    constructor(private amazonBoxService: AmazonBoxService) {
        this.getData();
    }
    ngOnInit(){
        
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