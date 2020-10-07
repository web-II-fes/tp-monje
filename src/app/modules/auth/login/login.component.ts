import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../servicio/auth.service';
import {TokenStorage} from './../servicio/token-storage.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private tokenStorage: TokenStorage, private auth: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  submit(){
    let credenciales = this.loginForm.value;
    debugger;
    this.auth.login(credenciales).subscribe((data) => {
      debugger;
      let user = data;
      this.tokenStorage.saveToken(data.token);
    });
    
  }


}
