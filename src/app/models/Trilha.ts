import { Nivel } from "./enums/nivel";
import { Fase } from "./fase";

export class Trilha {
    id?: number;
    nome?: string;
    descricao?: string;
    nivel?: Nivel
    ativo: boolean = true;
    fases: Fase[];

    constructor() {
        this.fases = [
            {
                ordem: 1,
                perguntasFase: []
            },
            {
                ordem: 2,
                perguntasFase: []
            },
            {
                ordem: 3,
                perguntasFase: []
            },
            {
                ordem: 4,
                perguntasFase: []
            },
            {
                ordem: 5,
                perguntasFase: []
            }
        ]
    }
}