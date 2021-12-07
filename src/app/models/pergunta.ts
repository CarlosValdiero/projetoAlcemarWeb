import { Nivel } from "./enums/nivel";
import { Resposta } from "./resposta";

export class Pergunta {
    
    id?: number
    descricao: string;
    nivel?: Nivel
    respostas: Resposta[] = []
    respostaCorretaCod?: string;

    constructor(){
        this.descricao = "";
        this.respostas = [
            {
                cod: "A",
                descricao: ""
            },
            {
                cod: "B",
                descricao: ""
            },
            {
                cod: "C",
                descricao: ""
            },
            {
                cod: "D",
                descricao: ""
            }
        ];
    }
}