import { Status } from "./status";
import { Servico } from "./servico";
import { Usuario } from "./usuario";

export interface Chamado{
    codigo : string;
    titulo : string;
    data : Date;
    dataFim : Date;
    observacao : string;
    status : Status;
    usuario : Usuario;
    servico : Servico;
   

}