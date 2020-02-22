import { Estados } from '../../interface/estados';

export const ESTADOS_MOCK_RESPONSE: Estados[] = [{
  id: 110001505,
  nome: "Alta Floresta D'Oeste",
  municipio: {
    id: 1100015,
    nome: "Alta Floresta D'Oeste",
    microrregiao: {
      id: 11006,
      nome: "Cacoal",
      mesorregiao: {
        id: 1102,
        nome: "Leste Rondoniense",
        uf: {
          id: 11,
          sigla: "RO",
          nome: "Rondônia",
          regiao: {
            id: 1,
            sigla: "N",
            nome: "Norte"
          }
        }
      }
    }
  }
}];