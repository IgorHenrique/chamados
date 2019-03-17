import { Usuario } from "./usuario";
import { Sla } from "./sla";

export interface Servico{
    codigo : string;
    descricao : string;
    responsavel : Usuario;
    sla : Sla;
}