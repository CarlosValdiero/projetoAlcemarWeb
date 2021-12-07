import { Nivel } from "../enums/nivel"

export class PerguntaDTO {
    descricao: string;
	nivel: Nivel;
	respostas: string[];
	respostaCorreta: string

    constructor(
        descricao: string,
        nivel: Nivel,
        respostas: string[],
        respostaCorreta: string
    ){
        this.descricao = descricao;
        this.nivel = nivel;
        this.respostas = respostas;
        this.respostaCorreta = respostaCorreta;
    }
}