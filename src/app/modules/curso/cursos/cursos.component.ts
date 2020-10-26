import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from '../servicios/curso.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  displayedColumns: string[] = ['nombreCurso', 'profesor', 'anio', 'estado', 'editar', 'borrar'];
  dataSource: any[] = [];

  idCurso: any;

  constructor(private cursoService: CursoService, private router: Router) { }

  ngOnInit() {
    this.getCurso();
  }

  
  getCurso(){
    this.cursoService.getCurso().subscribe((data : any) => {
      this.dataSource = data;
    });
  }

  editar(idCurso){
    debugger;
    this.router.navigate(['/cursos/crear-curso-component/' + idCurso]);
  }

  borrar(idCurso){
    this.idCurso = idCurso;
    this.cursoService.borrarCurso(this.idCurso).subscribe((data: any )=>{
      let cursoBorrado = idCurso;
    });
    location.reload();
  }

}
