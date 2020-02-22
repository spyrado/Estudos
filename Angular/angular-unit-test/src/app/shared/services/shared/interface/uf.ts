import { Regiao } from './regiao';

export interface UF {
  id: number;
  sigla: string;
  nome: string;
  regiao: Regiao;
}