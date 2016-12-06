import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { SwiperModule } from 'angular2-useful-swiper';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, HomeService, SliderService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { HeaderWeshopComponent } from './header/header-weshop.component';
import { LeftMenuComponent } from './header/left-menu.component';
import { BigSliderWeshopComponent } from './slider/big-slider-weshop.component';
import { BuyFromComponent } from './home/brand/buy-from.component';
import { HelpBuyComponent } from './home/help-buy/help-buy.component';
import { HotDealComponent } from './home/hot-deal/hot-deal.component';
import { AmazonComponent } from './home/amazon-box/amazon.component';
import { EbayComponent } from './home/ebay-box/ebay.component';
import { DhgateComponent } from './home/dhgate-box/dhgate.component';
import { RecentlyViewComponent } from './home/recently-view/recently-view.component';
import { HeaderAmazonComponent } from './header/amazon/header-amazon.component';
import { AmazonPortalComponent } from './amazon/index';
import { EbayPortalComponent } from './ebay/index';
import { HeaderEbayComponent } from './header/ebay/header-ebay.component';
import { NotFoundComponent } from './error/not-found.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SwiperModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HeaderWeshopComponent,
        BigSliderWeshopComponent,
        BuyFromComponent,
        HelpBuyComponent,
        HotDealComponent,
        AmazonComponent,
        EbayComponent,
        DhgateComponent,
        RecentlyViewComponent,
        LeftMenuComponent,
        HeaderAmazonComponent,
        AmazonPortalComponent,
        EbayPortalComponent,
        HeaderEbayComponent,
        NotFoundComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        HomeService,
        SliderService,
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }