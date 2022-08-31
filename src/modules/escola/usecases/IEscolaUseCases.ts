import type { Escola } from "../../../types/Escola";

interface IBuscarTodasEscolasUC {
    buscarTodasEscolas(): Promise<Escola[]>;

    buscarEscolaPorId(id: number): Promise<Escola>;
}

export default IBuscarTodasEscolasUC;