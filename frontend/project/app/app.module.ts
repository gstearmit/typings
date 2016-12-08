import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

import { ShareModule} from './share/share.module';
import { GlobalModule } from './global-module/global.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    ShareModule,
    GlobalModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}