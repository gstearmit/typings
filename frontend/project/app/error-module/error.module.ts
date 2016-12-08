import { NgModule }        from '@angular/core';
//import { BrowserModule }   from '@angular/platform-browser';

import { CommonModule }    from '@angular/common';
//import { HttpModule, JsonpModule } from '@angular/http';
import { errorRouting }   from './error.routes';

import { ErrorComponent } from './error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InternalServerComponent } from './internal-server/internal-server.component';

@NgModule({
    imports: [
        errorRouting,
        CommonModule,
    ],
    declarations: [
        ErrorComponent,
        NotFoundComponent,
        InternalServerComponent
    ],
    exports: [

    ],
    providers: [

    ]
})
export class ErrorModule { }


