import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Aluno } from 'src/app/models/aluno';
import { AlunoDTO } from 'src/app/models/dto/aluno-dto';
import { AlunosService } from 'src/app/services/alunos/alunos.service';

@Component({
  selector: 'app-alunos-modal',
  templateUrl: './alunos-modal.component.html',
  styleUrls: ['./alunos-modal.component.scss']
})
export class AlunosModalComponent implements OnInit {

  aluno: Aluno | undefined;
  alunoForm: FormGroup | undefined;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    if(this.config.data.aluno){
      this.aluno = this.config.data.aluno;
    }
    this.startForm();
  }

  startForm() {
    this.alunoForm = new FormGroup({
      matricula: new FormControl(this.aluno?.matricula, [Validators.required]),
      nome: new FormControl(this.aluno?.usuario?.nome, [Validators.required]),
      email: new FormControl(this.aluno?.usuario?.email, [Validators.required, Validators.email])
    });
  }

  salvar() {
    if(this.alunoForm?.valid){
      const alunoFormulario = this.alunoForm.value;
      this.alunosService.save(new AlunoDTO(this.aluno?.id, alunoFormulario.matricula, alunoFormulario.nome, alunoFormulario.email)).subscribe(
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
