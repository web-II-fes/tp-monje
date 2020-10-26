import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearCursoComponent } from './crear-cursos/crear-curso.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [     
      {path: 'curso-component', component: CursosComponent},
      {path: 'crear-curso-component/:id', component: CrearCursoComponent}
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CursosRoutingModule { }