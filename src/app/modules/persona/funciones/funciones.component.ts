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
  var1: any;
  var2: any;
  var3: any;
  var4: any;
  var5: any;
  var6: any;
  var7: any;
  var8: any;
  var9: any;
  var10: any;
  var11: any;
  var12: any;


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
this.var1 = 'Persona: '+ persona.split(' ');

//join
this.var2= "nombres Join: "+  nombres.join(' + ');

// indexOf()
this.var3= "Posicion de 'Alexis': "+ nombres.indexOf('Alexis');

// reverse
this.var4='Apellidos Reverse: '+ apellidos.reverse();

// lastIndexOf()
this.var5='ultima posicion de edad 20: '+ edades.lastIndexOf(20);

// includes()
this.var6='edad 20 se encuentra ? : '+ edades.includes(20);

// find()
this.var7= 'Primer Edad mayor a 5: '+ edades.find(x => x > 5);

// filter()
this.var8='Edades Mayores a 5: '+ edades.filter(x => x > 5);

// filter()
this.var9= 'Edades Menores a 5: '+ edades.filter(x => x < 5);

// map()
this.var10= 'Edades + 2: '+ edades.map(x => x + 2);

//sort()
this.var11= 'nombres ordenados : '+ nombres.sort();

// splice(index, amount)
this.var12 = 'Primera y Tercera edad: '+ edades.splice(0, 2);

  }
}
