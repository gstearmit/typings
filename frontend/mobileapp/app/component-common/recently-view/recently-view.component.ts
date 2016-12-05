// Imports
import { Component, OnInit } from '@angular/core';
import { RecentlyviewService } from './services/recentlyview.service';
import { TranslateService } from 'ng2-translate';
@Component({
    moduleId: module.id,
    selector: 'recently-view',
    templateUrl: `recently-view.component.html`,
    providers: [RecentlyviewService,TranslateService]
})
export class RecentlyViewComponent implements OnInit {
    public dataRecentlyView:{};
    constructor(private recentlyviewService: RecentlyviewService,public translateService:TranslateService) {
        this.dataRecentlyView =  this.recentlyviewService.getDataRecentlyView();
    }
    ngOnInit() {
        this.dataRecentlyView =  this.recentlyviewService.getDataRecentlyView();
        this.translateService.addLangs(["en", "vn"]);
        this.translateService.setDefaultLang('vn');
        this.translateService.use('vn');
    }
}