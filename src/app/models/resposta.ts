export class Resposta {
    id?: number;
    cod: string;
    descricao: string;

    constructor(descricao: string, cod: string){
        this.descricao = descricao;
        this.cod = cod;
    }
}