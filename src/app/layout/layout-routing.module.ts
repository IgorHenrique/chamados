import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'inicio'
            },
            {
                path: 'inicio',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'graficos',
                loadChildren: './graficos/charts.module#ChartsModule'
            },
            {
                path: 'components',
                loadChildren:
                    './material-components/material-components.module#MaterialComponentsModule'
            },
            {
               
                path: 'chamados',
                loadChildren: './chamados/chamados.module#ChamadosModule'
            },
            {
                path: 'meus-chamados',
                loadChildren: './meus-chamados/grid.module#GridModule'
            },
            {
                path: 'todos-chamados',
                loadChildren: './tables/tables.module#TablesModule'
            },
            {
                path: 'blank-page',
                loadChildren: './blank-page/blank-page.module#BlankPageModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
