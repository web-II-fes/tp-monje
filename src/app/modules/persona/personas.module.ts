import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { from } from 'rxjs';


import { PersonaComponent } from './persona/persona.component';
import { PersonaService } from './servicio/persona.service';
import { PersonasRoutingModule } from './personas-routing.module';
import { TablaPersonaComponent } from './tabla-persona/tabla-persona.component';
import { FuncionesComponent } from './funciones/funciones.component';




@NgModule({
    declarations: [PersonaComponent, TablaPersonaComponent, FuncionesComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        PersonasRoutingModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatMenuModule,
        MatTableModule,
        HttpClientModule,
        MatGridListModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatIconModule
    ],
    providers: [PersonaService]
  })

export class PersonasModule {}