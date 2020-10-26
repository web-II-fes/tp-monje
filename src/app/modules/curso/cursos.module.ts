import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {CursosRoutingModule} from './cursos-routing.module';

import { CrearCursoComponent } from '../curso/crear-cursos/crear-curso.component';
import { CursosComponent } from '../curso/cursos/cursos.component';
import { CursoService } from './servicios/curso.service';

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




@NgModule({
    declarations: [CrearCursoComponent,CursosComponent ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        CursosRoutingModule,
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
    providers: [CursoService]
  })

export class CursosModule {}