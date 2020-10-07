import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../servicio/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.registroForm = this.fb.group({
      username: [''],
      password: [''],
      email: ['']
    });
  }

  submit(){
    let credenciales = this.registroForm.value;
    debugger;
    this.auth.registro(credenciales).subscribe(data => {
      let newUser = data;
    });
    this.router.navigate(['/login']);
  }

}
