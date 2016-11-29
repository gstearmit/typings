import { Component, OnInit } from '@angular/core';
import { HotdealService } from './services/hotdeal.service'

@Component({
    moduleId: module.id,
    selector: 'hot-deal',
    templateUrl: `hot-deal.component.html`
})

export class HotDealComponent implements OnInit {
	public dataHotDeal:{};
    constructor(private hotdealService: HotdealService) {
        this.dataHotDeal =  this.hotdealService.getDataHotdeal();
    }
    ngOnInit() {
        this.dataHotDeal =  this.hotdealService.getDataHotdeal();
    }
}