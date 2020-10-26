import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../servicio/persona.service';

@Component({
  selector: 'app-tabla-persona',
  templateUrl: './tabla-persona.component.html',
  styleUrls: ['./tabla-persona.component.css']
})
export class TablaPersonaComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'editar', 'borrar'];
  dataSource: any[] = [];

  idPersona: any;

  constructor( private personaService: PersonaService, private router: Router) { }

  ngOnInit() {
    this.getPersona();
  }


  getPersona(){
    debugger;
    this.personaService.getPersona().subscribe((personas: any) => {
      this.dataSource = personas;
    });
  }

  editar(idPersona){
    debugger;
    this.router.navigate(['/personas/persona/' + idPersona]);
  }

  borrar(idPersona){
    this.idPersona = idPersona;
    this.personaService.borrarPersona(this.idPersona).subscribe((data: any )=>{
      let personaBorrada = idPersona;
    });
    location.reload();
  }

}
