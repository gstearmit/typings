import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AmazonBoxService } from './services/amazon-box.service';
import {AmazonBox}          from'./model/amazon-box';

@Component({
    moduleId: module.id,
    selector: 'amazon',
    templateUrl: `amazon.component.html`
})

export class AmazonComponent implements OnInit {
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