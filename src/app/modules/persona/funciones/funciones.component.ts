import { Component, OnInit } from '@angular/core';
import { Persona } from '../clase/persona';
import { PersonaService } from '../servicio/persona.service';

@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.css']
})
export class FuncionesComponent implements OnInit {

  personas: Persona[];


  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.getPersona()
  }



  getPersona(){
    this.personaService.getPersona().subscribe((personas: any) => {
      this.personas = personas;

    });
  }

  funcion(){


let nombres: String [] = [];
let apellidos: String [] = [];
let edades: number [] = [];

let i=0;

while (this.personas.length > i) {

  nombres.push(this.personas[i].nombre);
  apellidos.push(this.personas[i].apellido);
  edades.push(this.personas[i].edad);
  i++;
}    

let persona = this.personas[0].nombre+' '+this.personas[0].apellido;

// split
console.log('Persona: ', persona.split(' '));

//join
console.log("nombres Join: ", nombres.join(' + '));

// indexOf()
console.log("Posicion de 'Alexis': ", nombres.indexOf('Alexis'));

// reverse
console.log('Apellidos Reverse: ', apellidos.reverse());

// lastIndexOf()
console.log('ultima posicion de edad 20: ', edades.lastIndexOf(20));

// includes()
console.log('edad encontrada ? : ', edades.includes(20));

// find()
console.log('Primer Edad mayor a 5: ', edades.find(x => x > 5));

// filter()
console.log('Edades Mayores a 5: ', edades.filter(x => x > 5));

// filter()
console.log('Edades Menores a 5: ', edades.filter(x => x < 5));

// map()
console.log('Edades + 2: ', edades.map(x => x + 2));

//sort()
console.log('nombres ordenados : ', nombres.sort());

// splice(index, amount)
console.log('Primera y Tercera edad: ', edades.splice(0, 2));

  }
}
