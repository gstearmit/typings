import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dhgate',
    templateUrl: `dhgate.component.html`
})

export class DhgateComponent implements OnInit {
    public bannerDHGateItem = {};
    public bannerDHGateBigBanner = {};


    ngOnInit() {
        this.loadBannerDHGateItem();
        this.loadBannerDHGateBigBanner();
    }

    private loadBannerDHGateItem() {
        this.bannerDHGateItem =[
            {
                "dhgateBannerId" : "1",
                "dhgateBannerLink" : "app/common/img/ws-pd-banner.jpg",
                "dhgateBannerName" : "Banner test 1"
            },
            {
                "dhgateBannerId" : "2",
                "dhgateBannerLink" : "app/common/img/ws-pd-banner8.jpg",
                "dhgateBannerName" : "Banner test 2"
            },
            {
                "dhgateBannerId" : "3",
                "dhgateBannerLink" : "app/common/img/ws-pd-banner9.jpg",
                "dhgateBannerName" : "Banner test 3"
            },
            {
                "dhgateBannerId" : "4",
                "dhgateBannerLink" : "app/common/img/ws-pd-banner10.jpg",
                "dhgateBannerName" : "Banner test 4"
            }
        ];
    }

    private loadBannerDHGateBigBanner() {
        this.bannerDHGateBigBanner =
        {
            "portalBannerId" : "1",
            "portalBannerLink" : "app/common/img/banner-dhgate.jpg",
            "portalBannerName" : "Banner test 3"
        }
    }
}