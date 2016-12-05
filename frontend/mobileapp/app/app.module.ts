import { NgModule } from '@angular/core';
//import { BrowserModule }  from '@angular/platform-browser';
//import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './404/404.component';
import { AppRoutingModule } from './app.routes';
import { TranslateModule } from 'ng2-translate';

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