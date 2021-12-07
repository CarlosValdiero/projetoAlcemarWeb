import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  items: MenuItem[] = [];
  
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Alunos',
        icon:'pi pi-fw pi-user',
        routerLink: 'alunos'
      },
      {
      label: 'Perguntas',
      icon:'pi pi-fw pi-file',
      routerLink:'perguntas'
      },
      {
      label: 'Trilhas',
      icon:'pi pi-fw pi-calendar',
      routerLink:'trilhas'
      },
      {
      label: 'Trilhas',
      icon:'pi pi-fw pi-calendar',
      routerLink:'aluno-trilhas'
      }
  ]
}

}
