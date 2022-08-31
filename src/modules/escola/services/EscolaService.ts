import type IEscolaUseCases from "../usecases/IEscolaUseCases";
import type { Escola } from "../../../types/Escola";
import axios from "axios";

class EscolaService implements IEscolaUseCases {

    public async buscarEscolaPorId(id: number): Promise<Escola> {
        return await axios.get(`http://localhost:3004/escolas/${id}`).then((response) => {
            // console.log(response.data);
            return response.data as Escola;
        });
    }


    public async buscarTodasEscolas(): Promise<Escola[]> {
        return await axios.get("http://localhost:3004/escolas").then((response) => {
            // console.log(response);
            return response.data as Escola[];
        });
    }
}

export default EscolaService;
