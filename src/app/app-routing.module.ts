import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrilhaJogoComponent } from './pages/alunos-pages/trilhas-alunos/trilha-jogo/trilha-jogo.component';
import { TrilhasAlunosComponent } from './pages/alunos-pages/trilhas-alunos/trilhas-alunos.component';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { PerguntasComponent } from './pages/perguntas/perguntas.component';
import { TrilhasComponent } from './pages/trilhas/trilhas.component';

const routes: Routes = [
  { path: 'alunos', component: AlunosComponent },
  { path: 'perguntas', component: PerguntasComponent },
  { path: 'trilhas', component: TrilhasComponent },
  { path: 'aluno-trilhas', component: TrilhasAlunosComponent},
  { path: 'aluno-trilhas/trilha/:id', component: TrilhaJogoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
