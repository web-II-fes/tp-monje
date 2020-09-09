import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder, private personaService: PersonaService) { }

  ngOnInit() {
    this.initForm();

    this.getPersona();
  }

  initForm(){
    this.itemForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      edad: []
    });
  }


  getPersona(){
    this.personaService.getPersona().subscribe((personas: any) => {
      this.personas = personas;
    });
  }

  editarPersona(persona: any){
    this.idPersona = persona._id;
    this.itemForm.patchValue({
      nombre: persona.nombre,
      apellido: persona.apellido,
      edad: persona.edad
    })

  }

  borrarPersona(persona: any){
    this.idPersona = persona._id;
    this.personaService.borrarPersona(this.idPersona).subscribe(resu => console.log( "Se Borra persona: " ));
  }


  submit(){
    debugger;
    if(this.idPersona){
        this.personaService.editarPersona(this.idPersona, this.itemForm.value).subscribe(persona => {
          console.log("Persona editada: ", persona);
        })
    }else{

      this.personaService.guardarPersona(this.itemForm.value).subscribe((persona )=>{
          console.log('Persona Nueva: ', persona);  
          
      });
    }
  }

}
