import { HTTP_INTERCEPTORS, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TokenService } from "../services/token/token.service";

const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private token: TokenService){}

    intercept(req: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        const token = this.token.getToken();
        if(token != null){
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token)});
        }
        return httpHandler.handle(authReq);
    }
}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
]