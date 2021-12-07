import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AlunoTrilhaDTO } from 'src/app/models/dto/aluno-trilha-dto';
import { HttpApi } from 'src/app/utils/http-api';

@Injectable({
  providedIn: 'root'
})
export class AlunoTrilhasService {

  constructor(
    private http: HttpApi
  ) { }

  getAll(): Observable<AlunoTrilhaDTO[]>{
    return this.http.get('/aluno-trilhas').pipe(map(data => data as AlunoTrilhaDTO[]));
  }
}
