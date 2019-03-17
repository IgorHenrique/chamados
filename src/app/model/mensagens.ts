import { Chamado } from "./chamados";

export interface Mensagem{
    codigo : string;
    mensagem : string;
    data : Date;
    chamado : Chamado;
}