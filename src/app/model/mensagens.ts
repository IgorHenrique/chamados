import { Chamado } from "./chamados";
import { Usuario } from "./usuario";

export class Mensagem{
    codigo : string;
    mensagem : string;
    chamado : Chamado;
    usuario: Usuario
}