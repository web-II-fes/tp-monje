import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AuthRoutingModule} from './auth-routing.module';

import {LoginComponent} from './login/login.component';
import {AuthService} from './servicio/auth.service';
import {TokenStorage} from './servicio/token-storage.service';
import { RegistroComponent } from './registro/registro.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
    declarations: [LoginComponent, RegistroComponent],
    imports: [
      ReactiveFormsModule,
      HttpClientModule,
      CommonModule, 
      AuthRoutingModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule
    ],
    providers: [AuthService, TokenStorage]
  })

export class authModule {}