import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionesComponent } from './funciones/funciones.component';
import { PersonaComponent } from './persona/persona.component';
import { TablaPersonaComponent } from './tabla-persona/tabla-persona.component';


const routes: Routes = [     
      {path: 'persona/:id', component: PersonaComponent},
      {path: 'tablaPersona', component: TablaPersonaComponent},
      {path: 'funciones', component: FuncionesComponent}
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PersonasRoutingModule { }