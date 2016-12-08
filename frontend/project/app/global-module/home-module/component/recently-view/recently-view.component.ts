// Imports
import { Component, OnInit } from '@angular/core';
import { RecentlyviewService } from 'services/recentlyview.service';
@Component({
    moduleId: module.id,
    selector: 'recently-view',
    templateUrl: `recently-view.component.html`,
    providers: [RecentlyviewService]
})
export class RecentlyViewComponent {
    public dataRecentlyView: {};
    constructor(private recentlyviewService: RecentlyviewService) {
        this.dataRecentlyView = this.recentlyviewService.getDataRecentlyView();
    }

}