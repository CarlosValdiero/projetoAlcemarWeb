import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Nivel } from 'src/app/models/enums/nivel';
import { Pergunta } from 'src/app/models/pergunta';
import { PerguntasService } from 'src/app/services/perguntas/perguntas.service';

@Component({
  selector: 'app-perguntas-modal',
  templateUrl: './perguntas-modal.component.html',
  styleUrls: ['./perguntas-modal.component.scss']
})
export class PerguntasModalComponent implements OnInit {

  niveisOptions: {label: string, value: any}[]

  pergunta: Pergunta | undefined;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private perguntasService: PerguntasService
  ) { 
    this.niveisOptions = Object.keys(Nivel).map( nivel => ({label: nivel.toString(), value: nivel}));
  }


  ngOnInit(): void {
    this.pergunta = new Pergunta();
    if(this.config.data.pergunta){
      this.pergunta = this.config.data.pergunta;
    }
    debugger
  }

  salvar() {
    if(this.pergunta){
      debugger
      this.perguntasService.save(this.pergunta).subscribe(
        data => {
          this.ref.close("ok");
        },
        erro => {
          console.error(erro);
        }
      )
    }
  }

  fechar() {
    this.ref.close();
  }

}
