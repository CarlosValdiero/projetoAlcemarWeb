import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PerguntaDTO } from 'src/app/models/dto/pergunta-dto';
import { Nivel } from 'src/app/models/enums/nivel';
import { Fase } from 'src/app/models/fase';
import { Pergunta } from 'src/app/models/pergunta';
import { PerguntaFase } from 'src/app/models/pergunta-fase';
import { Trilha } from 'src/app/models/Trilha';
import { PerguntasService } from 'src/app/services/perguntas/perguntas.service';
import { TrilhasService } from 'src/app/services/trilhas/trilhas.service';

@Component({
  selector: 'app-trilhas-modal',
  templateUrl: './trilhas-modal.component.html',
  styleUrls: ['./trilhas-modal.component.scss']
})
export class TrilhasModalComponent implements OnInit {

  niveisOptions: {label: string, value: any}[]
  perguntas: Pergunta[] = []
  perguntasOptions: {label: string| undefined, value: any}[] = [{label:'Selecione...', value: null}]

  trilha: Trilha | undefined;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private trilhasService: TrilhasService,
    private perguntasService: PerguntasService
  ) { 
    this.niveisOptions = Object.keys(Nivel).map( nivel => ({label: nivel.toString(), value: nivel}));
    this.niveisOptions.unshift({label:'Selecione...', value: null});
  }


  ngOnInit(): void {
    this.getPerguntas();
    this.trilha = new Trilha();
    if(this.config.data.trilha){
      this.trilha = this.config.data.trilha;
    }
    debugger
  }

  getPerguntas() {
    this.perguntasService.getAll().subscribe(
      data => {
        this.perguntas = data;
        if(this.trilha?.nivel){
          this.getPerguntasOptions();
        }
      },
      erro => {
        debugger
      }
    )
  }

  salvar() {
    if(this.trilha){
      this.trilhasService.save(this.trilha).subscribe(
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

  selectNivel(){
    this.trilha?.fases.forEach(fase => {
      fase.perguntasFase = []
    })
    this.getPerguntasOptions();
  }

  getPerguntasOptions(){
    this.perguntasOptions = this.perguntas.filter(pergunta => pergunta.nivel == this.trilha?.nivel).map(pergunta => ({label: pergunta.descricao, value: pergunta }));
    this.perguntasOptions.unshift({label:'Selecione...', value: null});
  }

  addPerguntaFase(fase: Fase, event: any){
    if(event.value) {
      fase.perguntasFase.push({pergunta: event.value})
    }
    fase.optionModal = null;
  }

  disableFase(fase: Fase){
    return !this.trilha || !this.trilha.nivel || fase.perguntasFase.length >= 3
  }

  visualizarPergunta(pergunta: Pergunta){
debugger
  }

  removePergunta(fase: Fase, pergunta: PerguntaFase) {
    fase.perguntasFase = fase.perguntasFase.filter( perguntaFase => perguntaFase.pergunta != pergunta);
  }
}
