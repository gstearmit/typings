import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'amazon',
    templateUrl: `amazon.component.html`
})

export class AmazonComponent implements OnInit {
    bannerAmazon = {data1:[], data2:{}};

    ngOnInit() {
        this.loadBannerAmazon();
    }

    private loadBannerAmazon() {
        // this.homeService.getBanner();
        this.bannerAmazon.data1 =[
            {
                "amzBannerId" : "1",
                "amzBannerLink" : "app/common/img/ws-pd-banner.jpg",
                "amzBannerName" : "Banner test 1"
            },
            {
                "amzBannerId" : "2",
                "amzBannerLink" : "app/common/img/ws-pd-banner2.jpg",
                "amzBannerName" : "Banner test 2"
            },
            {
                "amzBannerId" : "3",
                "amzBannerLink" : "app/common/img/ws-pd-banner3.jpg",
                "amzBannerName" : "Banner test 3"
            },
            {
                "amzBannerId" : "4",
                "amzBannerLink" : "app/common/img/ws-pd-banner4.jpg",
                "amzBannerName" : "Banner test 4"
            }
        ];
        this.bannerAmazon.data2 =
        {
            "portalBannerId" : "1",
            "portalBannerLink" : "app/common/img/banner-amazon.jpg",
            "portalBannerName" : "Banner test 1"
        }
    }
}