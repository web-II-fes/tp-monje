import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {CursoService} from '../../servicio/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {

  cursoForm: FormGroup;
  idCursos: any;

  constructor(
    private fb: FormBuilder,
    private cursoService: CursoService, 
    private paramRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.initForm();

    this.paramRoute.paramMap.subscribe( param => {
    debugger;
      this.idCursos =  param.get('id');
      if (this.idCursos !== 'new'){
        this.getCursoById(this.idCursos)
      
      }      
    });
  }

  getCursoById(idCurso: string){
    this.cursoService.getCursoById(idCurso).subscribe(data =>{
      debugger;
      let cursoId = data;

      this.cursoForm.patchValue(cursoId);
    })
  }


  initForm(){
    this.cursoForm = this.fb.group({
      nombreCurso: [''],
      profesor: [''],
      anio: [],
      estado: ['']
    });
  }


  submit(){
    debugger;
    if(this.idCursos !== 'new'){
        this.cursoService.editarCurso(this.idCursos, this.cursoForm.value).subscribe(curso => {
         let cursoEditado = curso;
        });
    }else{
      this.cursoService.guardarCurso(this.cursoForm.value).subscribe((curso )=>{
         let cursoNuevo = curso;
      }); 
    } 

    this.router.navigate(['/curso-component'])

  }



}


