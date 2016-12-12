// Imports
import { Component, OnInit }   from '@angular/core';
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
       this.setData();
    }
    public setData(){
        this.datas.id       = 1;
        this.datas.src      = 'sdhdshshs';
        this.datas.title    = 'heloo';
        this.datas.price    = 50000;
        this.datas.currency = 'vnd';
        this.datas.sale     = 'sale';
        this.recentlyviewService.create( this.datas);
    }

}