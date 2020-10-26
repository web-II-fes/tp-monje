import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CursoService {

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private cursoUrl = 'http://localhost:3002/api/modules/cursos/';

  constructor(private httpClient: HttpClient) { }

  guardarCurso(curso: any){
    return this.httpClient.post(this.cursoUrl + 'curso', JSON.stringify(curso), this.httpOptions);
  }

 getCurso(){
    return this.httpClient.get(this.cursoUrl + 'curso');
  } 

  getCursoById(idCurso: string){
    return this.httpClient.get(this.cursoUrl + 'cursoId/' + idCurso);
  }


  editarCurso( idCurso, curso ){
    return this.httpClient.put(this.cursoUrl + 'curso/' + idCurso, JSON.stringify(curso),this.httpOptions);
  }

  borrarCurso( idCurso ){
    return this.httpClient.delete(this.cursoUrl + 'curso/' + idCurso, this.httpOptions);
  }
}
