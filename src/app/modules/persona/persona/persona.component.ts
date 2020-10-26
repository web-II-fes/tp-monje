import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {PersonaService} from './../servicio/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  itemForm: FormGroup;

  personas: any[] = [];
  idPersona: any;

  constructor(private fb: FormBuilder,
     private personaService: PersonaService,
     private paramRoute: ActivatedRoute,
     private router: Router
     ) { }

  ngOnInit() {
    this.initForm();
    this.paramRoute.paramMap.subscribe( param => {
      debugger;
        this.idPersona =  param.get('id');
        if (this.idPersona !== 'new'){
          this.getPersonaById(this.idPersona)
        
        }      
      });;
  }

  initForm(){
    this.itemForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      edad: []
    });
  }

  getPersonaById(idPersona: string){
    this.personaService.getPersonaById(idPersona).subscribe(data =>{
      debugger;
      let personaId = data;

      this.itemForm.patchValue(personaId);
    })
  }

  submit(){
    debugger;
    if(this.idPersona !== 'new'){
        this.personaService.editarPersona(this.idPersona, this.itemForm.value).subscribe(persona => {
         let personaEditada = persona;
        });
    }else{
      this.personaService.guardarPersona(this.itemForm.value).subscribe((persona )=>{
         let personaNueva = persona;
      }); 
    } 

    this.router.navigate(['/personas/tablaPersona']);

  }

}
