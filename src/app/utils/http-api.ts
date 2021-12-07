import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpApi {

    constructor(
        private http: HttpClient
    ) {}

    get(url: string, options?:any): Observable<any> {
        return this.http.get(environment.urlApi + url, this.getHeader())
    }

    post(url: string, body: any,options?:any): Observable<any> {
        return this.http.post(environment.urlApi + url, body, this.getHeader())
    }

    getHeader(){
        let headers = new HttpHeaders()
        headers = headers.append('AlunoId','28');
        return {headers };
    }

}