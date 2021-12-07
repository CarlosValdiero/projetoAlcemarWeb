import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Trilha } from 'src/app/models/Trilha';
import { TrilhasService } from 'src/app/services/trilhas/trilhas.service';
import { TrilhasModalComponent } from './trilhas-modal/trilhas-modal.component';

@Component({
  selector: 'app-trilhas',
  templateUrl: './trilhas.component.html',
  styleUrls: ['./trilhas.component.scss']
})
export class TrilhasComponent implements OnInit {

  trilhas: Trilha[] = []

  constructor(
    private trilhasService: TrilhasService,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getTrilha();
  }

  getTrilha() {
    this.trilhasService.getAll().subscribe(
      data => {
        debugger
        this.trilhas = data;
      },
      erro => {
        debugger
      }
    )
  }

  openModal(trilha? : Trilha ){
    const modal = this.dialogService.open(TrilhasModalComponent, {
      header: 'Cadastro de Trilha',
      width: '800px',
      height: '800px',
      data:{
        trilha
      }
    });
    
    modal.onClose.subscribe( data => {
      if(data){
        this.getTrilha();
      }
    })
  }

}
