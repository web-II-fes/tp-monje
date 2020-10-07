import { HTTP_INTERCEPTORS, HttpEvent, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorage } from '../servicio/token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';


@Injectable() 
export class AuthIntereceptor implements HttpInterceptor {
    constructor(private tokenService: TokenStorage){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        const token = this.tokenService.getToken();

        if(token != null){
            authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)});

        }
        return next.handle(authReq);
    }

}
export const authInterceptorProviders = [{provide: HTTP_INTERCEPTORS, useClass: AuthIntereceptor, multi: true}];