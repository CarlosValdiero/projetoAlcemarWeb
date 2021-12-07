export class AlunoDTO{
    id?: number;
    matricula: number;
    nome: string;
    email: string;

    constructor(
        id: number | undefined,
        matricula: number,
        nome: string,
        email: string
    ) {
        this.id = id;
        this.matricula = matricula;
        this.nome = nome;
        this.email = email;
    }
}