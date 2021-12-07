import { Component, OnInit } from '@angular/core';
import { AlunosService } from 'src/app/services/alunos/alunos.service';
import { Aluno } from 'src/app/models/aluno'
import { DialogService } from 'primeng/dynamicdialog';
import { AlunosModalComponent } from './alunos-modal/alunos-modal.component';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  alunos: Aluno[] = []

  constructor(
    private alunosService: AlunosService,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getAlunos();
  }

  getAlunos() {
    this.alunosService.getAll().subscribe(
      data => {
        this.alunos = data;
      },
      erro => {
        debugger
      }
    )
  }

  openModal(aluno? : Aluno ){
    const modal = this.dialogService.open(AlunosModalComponent, {
      header: 'Cadastro de Aluno',
      width: '500px',
      data:{
        aluno
      }
    });
    
    modal.onClose.subscribe( data => {
      if(data){
        this.getAlunos();
      }
    })
  }

}
