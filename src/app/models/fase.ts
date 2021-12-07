import { PerguntaFase } from "./pergunta-fase";

export class Fase {
    id?: number;
    ordem?: number;
    perguntasFase: PerguntaFase[] = [];
    optionModal?: any;
}