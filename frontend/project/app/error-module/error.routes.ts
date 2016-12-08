import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { InternalServerComponent } from './component/internal-server/internal-server.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '',component: NotFoundComponent } ,
            { path: 'notfound',component: NotFoundComponent } ,
            { path: 'internal',component: InternalServerComponent }

        ])
    ],
    exports: [RouterModule]
})

export class errorRouting{ }
