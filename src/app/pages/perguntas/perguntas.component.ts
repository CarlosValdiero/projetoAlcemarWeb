import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Pergunta } from 'src/app/models/pergunta';
import { PerguntasService } from 'src/app/services/perguntas/perguntas.service';
import { PerguntasModalComponent } from './perguntas-modal/perguntas-modal.component';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.scss']
})
export class PerguntasComponent implements OnInit {

  perguntas: Pergunta[] = []

  constructor(
    private perguntasService: PerguntasService,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getPerguntas();
  }

  getPerguntas() {
    this.perguntasService.getAll().subscribe(
      data => {
        this.perguntas = data;
      },
      erro => {
        debugger
      }
    )
  }

  openModal(pergunta? : Pergunta ){
    const modal = this.dialogService.open(PerguntasModalComponent, {
      header: 'Cadastro de Pergunta',
      width: '600px',
      height: '800px',
      data:{
        pergunta
      }
    });
    
    modal.onClose.subscribe( data => {
      if(data){
        this.getPerguntas();
      }
    })
  }

}
