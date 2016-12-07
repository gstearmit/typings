import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
//import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//import { HomeModule } from './global-module/home-module/home.module';

import { AppComponent } from './app.component';
//import { NotFoundComponent } from './404/404.component';
import { AppRoutingModule } from './app.routes';

import { TranslateModule } from 'ng2-translate';
// import { ShareModule} from './share/share.module';
import { GlobalModule } from './global-module/global.module';


@NgModule({
  imports: [
    BrowserModule,
    // FormsModule,
    HttpModule,
    JsonpModule,
   // HomeModule,
    AppRoutingModule,
    TranslateModule,
    // ShareModule,
    GlobalModule
  ],
  declarations: [
    AppComponent,
    //NotFoundComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}