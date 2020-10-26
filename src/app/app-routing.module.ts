import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './modules/auth/guards/auth.guard';

const routes: Routes = [
{
  path: '',
  loadChildren: () => import('./modules/auth/auth.module').then(m => m.authModule)
},
{
  path: 'cursos', 
  loadChildren: () => import('./modules/curso/cursos.module').then(m => m.CursosModule),
  canActivate: [AuthGuard]
},
{
  path: 'personas', 
  loadChildren: () => import('./modules/persona/personas.module').then(m => m.PersonasModule),
  canActivate: [AuthGuard]
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
