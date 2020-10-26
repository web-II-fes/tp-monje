import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { AngularFireAuth } from '@angular/fire/auth';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
	providedIn: 'root'
}) 
export class AuthService {
    private authUrl = 'http://localhost:3002/api/modules/auth/';
    legeado: boolean;

    constructor(private http: HttpClient) {}


    public autenticado(): boolean{
        return localStorage.getItem('esta legeado') === 'true' ? true : false;
    }

    login(credenciales) : Observable<any> {
        debugger;
        return this.http.post(
            this.authUrl + 'login', 
            {username: credenciales.username, password: credenciales.password},
            httpOptions
        ).pipe(map(x => {
            debugger;
            this.legeado = true;
            localStorage.setItem('esta legeado', this.legeado.toString());
            return x;
        }));
    }

    registro(credenciales): Observable<any> {
        return this.http.post(
            this.authUrl + 'registro', 
            {username: credenciales.username, password: credenciales.password, email: credenciales.email}
        );
    }
}