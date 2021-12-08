import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fase',
  templateUrl: './fase.component.html',
  styleUrls: ['./fase.component.scss']
})
export class FaseComponent implements OnInit {

  @Input() fase: any;
  @Input() ativo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
