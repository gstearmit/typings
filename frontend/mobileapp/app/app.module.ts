import { NgModule } from '@angular/core';
//import { BrowserModule }  from '@angular/platform-browser';
//import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './404/404.component';
import { AppRoutingModule } from './app.routes';
import { TranslateModule } from 'ng2-translate';
import { ShareModule} from './share/share.module';


import { SliderService } from './slider/weshop/services/slider.service';
import { HotdealService } from './component-common/hot-deal/services/hotdeal.service';
import { AmazonBoxService } from './amazon/amazon-box/services/amazon-box.service';
import { EbayBoxService } from './ebay/ebay-box/services/ebay-box.service';
import { DhgateBoxService } from './dhgate/dhgate-box/services/dhgate-box.service';
import { RecentlyviewService } from './component-common/recently-view/services/recentlyview.service';

@NgModule({
  imports: [
    // BrowserModule,
    // FormsModule,
    HttpModule,
    JsonpModule,
    HomeModule,
    AppRoutingModule,
    TranslateModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}