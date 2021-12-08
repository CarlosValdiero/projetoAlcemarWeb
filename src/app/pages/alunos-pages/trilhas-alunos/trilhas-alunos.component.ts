import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AlunoTrilhaDTO } from 'src/app/models/dto/aluno-trilha-dto';
import { AlunoTrilhasService } from 'src/app/services/aluno-trilhas/aluno-trilhas.service';
@Component({
  selector: 'app-trilhas-alunos',
  templateUrl: './trilhas-alunos.component.html',
  styleUrls: ['./trilhas-alunos.component.scss']
})
export class TrilhasAlunosComponent implements OnInit {

  trilhas: AlunoTrilhaDTO[] = []

  constructor(
    private alunoTrilhasService: AlunoTrilhasService,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getTrilha();
  }

  getTrilha() {
    this.alunoTrilhasService.getAll().subscribe(
      data => {
        debugger
        this.trilhas = data;
      },
      erro => {
        debugger
      }
    )
  }

}
