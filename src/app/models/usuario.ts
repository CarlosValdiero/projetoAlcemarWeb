import { TipoUsuario } from "./enums/tipo-usuario";

export class Usuario {
    id?: number;
    nome?: string;
    email?: string;
    senha?: string;
    tipoUsuario?: TipoUsuario;

    constructor(){

    }
}