// Imports
import { Component, OnInit } from '@angular/core';
import { RecentlyviewService } from './services/recentlyview.service';
@Component({
    moduleId: module.id,
    selector: 'recently-view',
    templateUrl: `recently-view.component.html`,
    providers: [RecentlyviewService]
})
export class RecentlyViewComponent {
    public datas: any = {};
    constructor(private recentlyviewService: RecentlyviewService) {
       this.getData();
    }
    public setData(){
        this.datas.id       = 1;
        this.datas.src      = 'http://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/ywwAAOSwZG9Wi~mT/$_1.JPG';
        this.datas.title    = 'Product test';
        this.datas.price    = 50000;
        this.datas.currency = 'VND';
        this.datas.sale     = 'sale';
        this.recentlyviewService.create(this.datas);
    }
    public getData(){
        this.datas = this.recentlyviewService.getAll();
    }

}