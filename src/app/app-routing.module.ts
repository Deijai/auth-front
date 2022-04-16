import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {path: '', loadChildren: () => import ('./core/components/auth/auth.module').then( m => m.AuthModule) },
  {path: 'admin', loadChildren: () => import ('./components/admin/admin.module').then( m => m.AdminModule), canActivateChild: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
