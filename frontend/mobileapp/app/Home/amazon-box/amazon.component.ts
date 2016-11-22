import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AmazonBoxService } from './services/amazon-box.service'
@Component({
    moduleId: module.id,
    selector: 'amazon',
    templateUrl: `amazon.component.html`
})

export class AmazonComponent implements OnInit {
    public listimage:{};
    public slider:{};
    constructor(private amazonBoxService: AmazonBoxService) {
        this.getData();
    }
    ngOnInt(){
        
    }
    getData(){
        let self = this;
        this.amazonBoxService.getDataAmazonBox().subscribe(function (res) {
        self.listimage = res.listimage;
        self.slider    = res.slider;
     });
    }
}