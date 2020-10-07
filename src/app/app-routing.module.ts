import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CrearCursoComponent } from './curso/crear-cursos/crear-curso.component';
// import { CursosComponent } from './curso/cursos/cursos.component';

const routes: Routes = [
{
  path: '',
  loadChildren: () => import('./modules/auth/auth.module').then(m => m.authModule)
}
  // {path: 'crear-curso-component', component: CrearCursoComponent},
  // {path: 'crear-curso-component/:id', component: CrearCursoComponent},
  // {path: 'curso-component', component: CursosComponent}
  // { path: '', redirectTo: 'curso-component', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
