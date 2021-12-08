import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PanelMenuModule} from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FieldsetModule} from 'primeng/fieldset';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { HeaderComponent } from './components/header/header.component';
import { AlunosModalComponent } from './pages/alunos/alunos-modal/alunos-modal.component';
import { CommonModule } from '@angular/common';
import { PerguntasComponent } from './pages/perguntas/perguntas.component';
import { PerguntasModalComponent } from './pages/perguntas/perguntas-modal/perguntas-modal.component';
import { TrilhasComponent } from './pages/trilhas/trilhas.component';
import { TrilhasModalComponent } from './pages/trilhas/trilhas-modal/trilhas-modal.component';
import { TrilhasAlunosComponent } from './pages/alunos-pages/trilhas-alunos/trilhas-alunos.component';
import { TrilhaJogoComponent } from './pages/alunos-pages/trilhas-alunos/trilha-jogo/trilha-jogo.component';
import { FaseComponent } from './pages/alunos-pages/trilhas-alunos/trilha-jogo/fase/fase.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    MenuLateralComponent,
    HeaderComponent,
    AlunosModalComponent,
    PerguntasComponent,
    PerguntasModalComponent,
    TrilhasComponent,
    TrilhasModalComponent,
    TrilhasAlunosComponent,
    TrilhaJogoComponent,
    FaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    PanelMenuModule,
    DynamicDialogModule,
    DropdownModule,
    RadioButtonModule,
    FieldsetModule
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
