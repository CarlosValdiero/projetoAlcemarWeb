import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Aluno } from '../../models/aluno';
import { AlunoDTO } from '../../models/dto/aluno-dto';
import { HttpApi } from '../../utils/http-api';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(
    private http: HttpApi
  ) { }

  getAll(): Observable<Aluno[]>{
    return this.http.get('/alunos').pipe(map(data => data as Aluno[]));
  }

  save(aluno: AlunoDTO): Observable<any> {
    return this.http.post('/alunos', aluno).pipe(map(data => data ));
  }
}
