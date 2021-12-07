import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Trilha } from 'src/app/models/Trilha';
import { HttpApi } from 'src/app/utils/http-api';

@Injectable({
  providedIn: 'root'
})
export class TrilhasService {

  constructor(
    private http: HttpApi
  ) { }

  getAll(): Observable<Trilha[]>{
    return this.http.get('/trilhas').pipe(map(data => data as Trilha[]));
  }

  save(trilha: Trilha): Observable<any> {
    return this.http.post('/trilhas', trilha).pipe(map(data => data ));
  }
}
