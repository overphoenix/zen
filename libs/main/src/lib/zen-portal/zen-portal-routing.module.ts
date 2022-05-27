import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role, RolesGuard } from '@zen/auth';

import { ZenDashboardComponent } from './zen-dashboard/zen-dashboard.component';
import { ZenPortalMainComponent } from './zen-portal-main/zen-portal-main.component';
import { ZenSettingsComponent } from './zen-settings/zen-settings.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: ZenPortalMainComponent,
    children: [
      {
        path: 'dashboard',
        component: ZenDashboardComponent,
      },
      {
        path: 'settings',
        component: ZenSettingsComponent,
      },
      {
        path: 'super',
        canLoad: [RolesGuard.for(Role.Super)],
        loadChildren: () => import('./zen-super/zen-super.module').then(m => m.ZenSuperModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ZenPortalRoutingModule {}
