import { Component, OnInit } from '@angular/core';
import { DhgateBoxService } from 'services/dhgate-box.service';
import {DhgateBox}          from'model/dhgate-box';

@Component({
    moduleId: module.id,
    selector: 'dhgate',
    templateUrl: `dhgate.component.html`
})

export class DhgateComponent implements OnInit {
    public listimage:{};
    public slider:{};
    datas: DhgateBox[] = []
    constructor(private dhgateBoxService: DhgateBoxService) {
        this.getData();
    }
    ngOnInit(){

    }
    getData(){
        let self = this;
        this.dhgateBoxService.getDataDhgateBox().subscribe(function (res) {
            this.datas = res;
            self.listimage = this.datas.listimage;
            self.slider    = this.datas.slider;
        });
    }
}