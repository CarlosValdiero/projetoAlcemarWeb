import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AlunoTrilhasService } from 'src/app/services/aluno-trilhas/aluno-trilhas.service';

@Component({
  selector: 'app-trilha-jogo',
  templateUrl: './trilha-jogo.component.html',
  styleUrls: ['./trilha-jogo.component.scss']
})
export class TrilhaJogoComponent implements OnInit {

  id!: string | null;

  jogo: any;

  constructor(
    private route: ActivatedRoute,
    private alunoTrilhasService: AlunoTrilhasService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if(params.get('id')){
        this.id = params.get('id')
      }
    })
    this.getTrilha();
  }

  getTrilha(){
    if(!this.id) return;

    this.alunoTrilhasService.getTrilha(this.id).subscribe(
      (data) => {
        this.jogo = data;
      }
    )
  }

}
