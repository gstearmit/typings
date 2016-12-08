import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { errorRouting }   from './error.routes';

import { NotFoundComponent } from './component/not-found/not-found.component';
import { InternalServerComponent } from './component/internal-server/internal-server.component';

@NgModule({
    imports: [
        errorRouting,
        CommonModule,
    ],
    declarations: [
        NotFoundComponent,
        InternalServerComponent
    ],
    exports: [

    ],
    providers: [

    ]
})
export class ErrorModule { }


