import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PerguntaDTO } from 'src/app/models/dto/pergunta-dto';
import { Pergunta } from 'src/app/models/pergunta';
import { HttpApi } from 'src/app/utils/http-api';

@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  constructor(
    private http: HttpApi
  ) { }

  getAll(): Observable<Pergunta[]>{
    return this.http.get('/perguntas').pipe(map(data => data as Pergunta[]));
  }

  save(pergunta: Pergunta): Observable<any> {
    return this.http.post('/perguntas', pergunta).pipe(map(data => data ));
  }
}
