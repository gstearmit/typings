import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InternalServerComponent } from './internal-server/internal-server.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'error',component: ErrorComponent,
                children: [
                    { path: '/404',component: NotFoundComponent },
                    { path: '/500',component: InternalServerComponent },

                ]
            }

        ])
    ],
    exports: [RouterModule]
})

export class errorRouting{ }
