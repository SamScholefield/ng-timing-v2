import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouting } from './app-routing';
import { HomeComponent } from './screens/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppRouting.PATH.HOME,
    pathMatch: 'full',
    data: {
      pageTitle: undefined,
    },
  },
  {
    path: AppRouting.PATH.HOME,
    component: HomeComponent,
    // canActivate: [AuthGuard, DataAndPermissionGuard],
    data: {
      pageTitle: 'dashboard.title',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
