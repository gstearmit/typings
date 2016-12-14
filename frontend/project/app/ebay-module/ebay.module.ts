import { NgModule } from '@angular/core';
//import { BrowserModule }   from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { HomeModule } from './home-module/home.module';
import { ebayRouting } from './ebay.routes';
import { EbayBannerService } from './home-module/component/ebay-banner/service/ebay-banner.service';
import { EbayComponent } from './ebay.component';


@NgModule({
    imports: [
        ebayRouting,
        //BrowserModule,
        CommonModule,
        ShareModule,
        HomeModule,
        // CommonSystemModule
    ],
    declarations: [
        EbayComponent,
    ],
    exports: [

    ],
    providers: [
        EbayBannerService
    ]
})
export class EbayModule { }


